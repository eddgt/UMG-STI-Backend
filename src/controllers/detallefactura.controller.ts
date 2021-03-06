import { Request, Response } from 'express';

import { connect } from '../database';

import { DetalleFactura } from '../interface/detallefactura.interface';

class DetalleFacturaController {

    public detallefactura(req: Request, res: Response) {
        res.json({
            message: 'DetalleFactura is start'
        });
    }

    public async getDetalleFactura(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const detallefactura = await conne.query('SELECT * FROM fact_detalle');
        await conne.end()
        return res.json(detallefactura[0]);
    }

    public async createDetalleFactura(req: Request, res: Response): Promise<Response> {
        try {
            const newDetalleFactura: DetalleFactura = req.body;

            const conne = await connect();
            await conne.query('INSERT INTO fact_detalle SET ?', [newDetalleFactura]);
            await conne.end()

            return res.json({
                message: 'DetalleFactura creado'
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

        const detallefactura = await conne.query('SELECT d.*,  p.descripcion FROM fact_detalle d inner join plato p on d.plato_id = p.id WHERE d.factura_id = ?', [id_factura]);
        await conne.end()

        return res.json(detallefactura[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM fact_detalle WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'DetalleFactura eliminada'
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
            const update: DetalleFactura = req.body;

            const conne = await connect();

            await conne.query('UPDATE fact_detalle set ? WHERE id = ?', [update, id_update])            

            return res.json({
                message: 'DetalleFactura actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const detallefacturaController = new DetalleFacturaController();

