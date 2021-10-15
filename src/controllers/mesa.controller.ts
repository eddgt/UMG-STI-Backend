import { Request, Response } from 'express';

import { connect } from '../database';

import { Mesa } from '../interface/mesa.interface';

class MesaController {

    public mesa(req: Request, res: Response) {
        res.json({
            message: 'mesa is start'
        });
    }

    public async getMesa(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const mesa = await conne.query('SELECT * FROM mesa');
        await conne.end()

        return res.json(mesa[0]);
    }

    public async createMesa(req: Request, res: Response): Promise<Response> {
        try {
            const newMesa: Mesa = req.body;
            //console.log(newMesa);

            const conne = await connect();
            await conne.query('INSERT INTO mesa SET ?', [newMesa]);
            await conne.end()

            return res.json({
                message: 'Mesa creada'
            });

        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_mesa = req.params.id;

        const conne = await connect();

        const mesa = await conne.query('SELECT * FROM mesa WHERE id = ?', [id_mesa]);
        await conne.end()

        return res.json(mesa[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM mesa WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'Mesa eliminada'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }


    }

    public async Actualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id_delete = req.params.id;
            const update: Mesa = req.body;

            const conne = await connect();

            await conne.query('UPDATE mesa set ? WHERE id = ?', [update, id_delete])
            await conne.end()

            return res.json({
                message: 'Mesa actualizada'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const mesaController = new MesaController();

