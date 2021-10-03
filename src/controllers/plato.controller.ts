import { Request, Response } from 'express';

import { connect } from '../database';

import { Plato } from '../interface/plato.interface';

class PlatoController {

    public plato(req: Request, res: Response) {
        res.json({
            message: 'Plato is start'
        });
    }

    public async getPlato(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const plato = await conne.query('SELECT * FROM plato');
        return res.json(plato[0]);
    }

    public async createplato(req: Request, res: Response): Promise<Response> {
        try {
            const newPlato: Plato = req.body;
            //console.log(newPlato);

            const conne = await connect();
            await conne.query('INSERT INTO plato SET ?', [newPlato]);

            return res.json({
                message: 'Plato creado'
            });

        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_plato = req.params.id;

        const conne = await connect();

        const plato = await conne.query('SELECT * FROM plato WHERE id = ?', [id_plato]);

        return res.json(plato[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM plato WHERE id = ? ', [id_delete]);

            return res.json({
                message: 'Plato eliminado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }


    }

    public async Actualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id_plato = req.params.id;
            const update: Plato = req.body;

            const conne = await connect();

            await conne.query('UPDATE plato set ? WHERE id = ?', [update, id_plato])

            return res.json({
                message: 'Plato actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const platoController = new PlatoController();

