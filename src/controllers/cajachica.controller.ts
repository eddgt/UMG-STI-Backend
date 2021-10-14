import { Request, Response } from 'express';

import { connect } from '../database';

import { CajaChica } from '../interface/cajachica.interface';

class CajaChicaController {

    public cajachica(req: Request, res: Response) {
        res.json({
            message: 'Caja Chica is start'
        });
    }

    public async getCajaChica(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const cajachica = await conne.query('SELECT * FROM caja_chica');
        return res.json(cajachica[0]);
    }

    public async createCajaChica(req: Request, res: Response): Promise<Response> {
        try {
            const newCajaChica: CajaChica = req.body;

            const conne = await connect();
            await conne.query('INSERT INTO caja_chica SET ?', [newCajaChica]);

            return res.json({
                message: 'Caja Chica creada'
            });

        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_caja = req.params.id;

        const conne = await connect();

        const cajachica = await conne.query('SELECT * FROM caja_chica WHERE id = ?', [id_caja]);

        return res.json(cajachica[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM caja_chica WHERE id = ? ', [id_delete]);

            return res.json({
                message: 'Caja Chija eliminada'
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

            return res.json({
                message: 'Caja Chica actualizada'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const cajachicaController = new CajaChicaController();

