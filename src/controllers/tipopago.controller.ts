import { Request, Response } from 'express';

import { connect } from '../database';

import { TipoPago } from '../interface/tipopago.interface';

class TipoPagoController {

    public tipopago(req: Request, res: Response) {
        res.json({
            message: 'TipoPago is start'
        });
    }

    public async getTipoPago(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const tipopago = await conne.query('SELECT * FROM tipo_pago');
        return res.json(tipopago[0]);
    }

    public async createTipoPago(req: Request, res: Response): Promise<Response> {
        try {
            const newTipoPago: TipoPago = req.body;
            //console.log(newTipoPago);

            const conne = await connect();
            await conne.query('INSERT INTO tipo_pago SET ?', [newTipoPago]);

            return res.json({
                message: 'TipoPago creado'
            });

        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_tipopago = req.params.id;

        const conne = await connect();

        const tipopago = await conne.query('SELECT * FROM tipo_pago WHERE id = ?', [id_tipopago]);

        return res.json(tipopago[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM tipo_pago WHERE id = ? ', [id_delete]);

            return res.json({
                message: 'tipopago eliminado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }


    }

    public async Actualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id_tipopago = req.params.id;
            const update: TipoPago = req.body;

            const conne = await connect();

            await conne.query('UPDATE tipo_pago set ? WHERE id = ?', [update, id_tipopago])

            return res.json({
                message: 'tipopago actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const tipopagoController = new TipoPagoController();

