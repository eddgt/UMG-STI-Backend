import { Request, Response } from 'express';

import { connect } from '../database';

import { Delivery } from '../interface/delivery.interface';

class DeliveryController {

    public delivery(req: Request, res: Response) {
        res.json({
            message: 'delivery is start'
        });
    }

    public async getDelivery(req: Request, res: Response): Promise<Response> {
        try {
            const conne = await connect();

            const delivery = await conne.query('SELECT * FROM delivery');
            return res.json(delivery[0]);
        } catch (error) {
            return res.json({
                message: error
            });
        }
    }

    public async createDelivery(req: Request, res: Response): Promise<Response> {
        try {
            const newDelivery: Delivery = req.body;
            //console.log(newdelivery);

            const conne = await connect();
            await conne.query('INSERT INTO delivery SET ?', [newDelivery]);

            return res.json({
                message: 'Delivery creado'
            });
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {
        try {
            const id_delivery = req.params.id;

            const conne = await connect();

            const delivery = await conne.query('SELECT * FROM delivery WHERE id = ?', [id_delivery]);

            return res.json(delivery[0]);
        } catch (error) {
            return res.json({
                message: error
            });
        }
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {
        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM delivery WHERE id = ? ', [id_delete]);

            return res.json({
                message: 'delivery eliminado'
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
            const update: Delivery = req.body;

            const conne = await connect();

            await conne.query('UPDATE delivery set ? WHERE id = ?', [update, id_delete])

            return res.json({
                message: 'delivery actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const deliveryController = new DeliveryController();

