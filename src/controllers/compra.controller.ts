import { Request, Response } from 'express';

import { connect } from '../database';

import { Compra } from '../interface/compra.interface';

class CompraController {

    public compra(req: Request, res: Response) {
        res.json({
            message: 'compra is start'
        });
    }

    public async getCompra(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const compra = await conne.query('SELECT * FROM compra');
        return res.json(compra[0]);
    }

    public async createCompra(req: Request, res: Response): Promise<Response> {
        const newCompra: Compra = req.body;
        //console.log(newCompra);

        const conne = await connect();
        await conne.query('INSERT INTO compra SET ?', [newCompra]);

        return res.json({
            message: 'Compra creado'
        });
    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_compra = req.params.id;

        const conne = await connect();

        const compra = await conne.query('SELECT * FROM compra WHERE id = ?', [id_compra]);

        return res.json(compra[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        const id_delete = req.params.id;
        const conne = await connect();

        await conne.query('DELETE FROM compra WHERE id = ? ', [id_delete]);

        return res.json({
            message: 'Compra eliminada'
        })
    }

    public async Actualizar(req: Request, res: Response): Promise<Response> {
        const id_delete = req.params.id;
        const update: Compra = req.body;

        const conne = await connect();

        await conne.query('UPDATE compra set ? WHERE id = ?', [update, id_delete])

        return res.json({
            message: 'Compra actualizada'
        })
    }
}

export const compraController = new CompraController();

