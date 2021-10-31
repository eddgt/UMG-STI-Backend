import { Request, Response } from 'express';

import { connect } from '../database';

import { CajaChica } from '../interface/cajachica.interface';

// Modificacion 22/10/2021 ahora este es detalle caja chica
class CajaChicaController {

    public cajachica(req: Request, res: Response) {
        res.json({
            message: 'Caja Chica is start'
        });
    }

    public async getCajaChica(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const cajachica = await conne.query('SELECT * FROM caja_chica');
        await conne.end()
        return res.json(cajachica[0]);
    }

    public async createCajaChica(req: Request, res: Response): Promise<Response> {
        try {
            const newCajaChica: CajaChica = req.body;

            const conne = await connect();
            const result = await conne.query('INSERT INTO caja_chica SET ?', [newCajaChica]);
            await conne.end()

            return res.json({
                message: 'Detalle de Caja Chica creado',
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

        const cajachica = await conne.query('SELECT * FROM caja_chica WHERE fecha_apertura between DATE_FORMAT(?, \"%Y-%m-%d %H:%00:%s\") and DATE_FORMAT(?, \"%Y-%m-%d 23:59:59\") and Usuarios_id = ? ', [fecha, fecha, id_usuario]);
        await conne.end()

        return res.json(cajachica[0]);
    }

    public async ObtenerPorFecha(req: Request, res: Response): Promise<Response> {

        const fecha = req.params.fecha;        

        const conne = await connect();

        const cajachica = await conne.query('SELECT * FROM caja_chica WHERE fecha_apertura between DATE_FORMAT(?, \"%Y-%m-%d %H:%00:%s\") and DATE_FORMAT(?, \"%Y-%m-%d 23:59:59\") and Usuarios_id = ? ', [fecha, fecha]);
        await conne.end()

        return res.json(cajachica[0]);
    }


    public async ObtenerPorId(req: Request, res: Response): Promise<Response> {

        const id = req.params.id;        

        const conne = await connect();

        const cajachica = await conne.query('SELECT * FROM caja_chica WHERE id = ? ', [id]);
        await conne.end()

        return res.json(cajachica[0]);
    }

    public async ObtenerCajaDelDiaPorUsuario(req: Request, res: Response): Promise<Response> {

        const id_usuario = req.params.idusuario;

        const conne = await connect();

        const cajachica = await conne.query('select count(1) as cajacreada from header_caja_chica '+
        'where fecha between DATE_FORMAT(subtime(sysdate(), "06:00:00" ), "%Y-%m-%d %00:%00:%00") '+
        'and DATE_FORMAT(subtime(sysdate(), "06:00:00" ), "%Y-%m-%d 23:59:59") '+
        'and usuario_id = ? ', [id_usuario]);
        await conne.end()

        return res.json(cajachica[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM caja_chica WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'Detalle Caja Chija eliminado'
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
            const update: CajaChica = req.body;

            const conne = await connect();

            await conne.query('UPDATE caja_chica set ? WHERE id = ?', [update, id_update])
            await conne.end()

            return res.json({
                message: 'Detalle de Caja Chica actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const cajachicaController = new CajaChicaController();

