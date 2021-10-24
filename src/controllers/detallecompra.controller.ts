import { Request, Response } from 'express';

import { connect } from '../database';

import { DetalleCompra } from '../interface/detallecompra.interface';

class DetalleCompraController {

    public detallecompra(req: Request, res: Response) {
        res.json({
            message: 'detalle compra is start'
        });
    }

    public async getDetalleCompra(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const detallecompra = await conne.query('SELECT * FROM detalle_compra');
        return res.json(detallecompra[0]);
    }

    public async createDetalleCompra(req: Request, res: Response): Promise<Response> {
        try {
            const newDetalleCompra: DetalleCompra = req.body;
            

            const conne = await connect();
            await conne.query('INSERT INTO detalle_compra SET ?', [newDetalleCompra]);
            await conne.end()

            return res.json({
                message: 'Detalle Compra creado'
            });
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_compra = req.params.id;

        const conne = await connect();

        const detallecompra = await conne.query('SELECT * FROM detalle_compra WHERE id = ?', [id_compra]);
        await conne.end()

        return res.json(detallecompra[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM detalle_compra WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'Detalle Compra eliminada'
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
            const update: DetalleCompra = req.body;

            const conne = await connect();

            await conne.query('UPDATE detalle_compra set ? WHERE id = ?', [update, id_delete])
            await conne.end()

            return res.json({
                message: 'Detalle Compra actualizada'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }


    }
}

export const detalleCompraController = new DetalleCompraController();

