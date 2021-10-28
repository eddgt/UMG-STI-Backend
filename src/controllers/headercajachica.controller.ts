import { Request, Response } from 'express';

import { connect } from '../database';

import { HeaderCajaChica } from '../interface/headercajachica.interface';

class HeaderCajaChicaController {

    public headercajachica(req: Request, res: Response) {
        res.json({
            message: 'Header Caja Chica is start'
        });
    }

    public async getHeaderCajaChica(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const headercajachica = await conne.query('SELECT * FROM header_caja_chica');
        await conne.end()
        return res.json(headercajachica[0]);
    }

    public async createCajaChica(req: Request, res: Response): Promise<Response> {
        try {
            const newCajaChica: HeaderCajaChica = req.body;

            const conne = await connect();
            const result = await conne.query('INSERT INTO header_caja_chica SET ?', [newCajaChica]);
            await conne.end()

            return res.json({
                message: 'Header Caja Chica creada',
                id: result[0].insertId
            });

        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const fecha = req.params.fecha;
        const id_usuario = req.params.idusuario;

        const conne = await connect();

        const cajachica = await conne.query('SELECT * FROM header_caja_chica ' +
        'WHERE fecha between DATE_FORMAT(?, "%Y-%m-%d %H:%00:%s") '+
        'and DATE_FORMAT(?, "%Y-%m-%d 23:59:59") and usuario_id = ? order by fecha desc limit 1 ', [fecha, fecha, id_usuario]);
        await conne.end()

        return res.json(cajachica[0]);
    }


    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM header_caja_chica WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'Header Caja Chija eliminada'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }


    }

    public async Actualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id_update = req.params.id;
            const update: HeaderCajaChica = req.body;

            const conne = await connect();

            await conne.query('UPDATE header_caja_chica set ? WHERE id = ?', [update, id_update])
            await conne.end()

            return res.json({
                message: 'Header Caja Chica actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const headercajachicaController = new HeaderCajaChicaController();

