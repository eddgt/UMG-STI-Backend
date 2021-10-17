import { Request, Response } from 'express';

import { connect } from '../database';

import { Factura } from '../interface/factura.interface';

class FacturaController {

    public factura(req: Request, res: Response) {
        res.json({
            message: 'Factura is start'
        });
    }

    public async getFactura(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const factura = await conne.query('SELECT * FROM factura WHERE status="ACTIVA"');
        await conne.end()
        return res.json(factura[0]);
    }

    public async createFactura(req: Request, res: Response): Promise<Response> {
        try {
            const newFactura: Factura = req.body;

            const conne = await connect();
            const result = await conne.query('INSERT INTO factura SET ?', [newFactura]);
            await conne.end()

            return res.json({
                message: 'Factura creada',
                id: result[0].insertId
            });

        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_factura = req.params.id;

        const conne = await connect();

        const factura = await conne.query('SELECT * FROM factura WHERE id = ?', [id_factura]);        
        await conne.end()

        return res.json(factura[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM factura WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'Factura eliminada'
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
            const update: Factura = req.body;

            const conne = await connect();

            await conne.query('UPDATE factura set ? WHERE id = ?', [update, id_delete])
            await conne.end()

            return res.json({
                message: 'Factura actualizada'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const facturaController = new FacturaController();

