import { Request, Response } from 'express';

import { connect } from '../database';

import { TotalMesa } from '../interface/totalmesa.interface';

class TotalMesaController {

    public mesa(req: Request, res: Response) {
        res.json({
            message: 'Total Mesa is start'
        });
    }

    public async getTotalMesa(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const mesa = await conne.query('SELECT * FROM totalmesas');
        await conne.end()

        return res.json(mesa[0]);
    }

    public async createTotalMesa(req: Request, res: Response): Promise<Response> {
        try {
            const newTotalMesa: TotalMesa = req.body;
            //console.log(newMesa);

            const conne = await connect();
            const result = await conne.query('INSERT INTO totalmesas SET ?', [newTotalMesa]);
            await conne.end()

            return res.json({
                message: 'Total Mesa creado',
                id: result[0].insertId
            });

        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_mesa = req.params.idm;
        const id_factura = req.params.idf;

        const conne = await connect();

        const totalmesa = await conne.query('SELECT * FROM totalmesas WHERE id_mesa = ? and id_factura = ?', [id_mesa, id_factura]);
        await conne.end()

        return res.json(totalmesa[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            
            const conne = await connect();

            await conne.query('DELETE FROM totalmesa WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'Total Mesa eliminado'
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
            const update: TotalMesa = req.body;

            const conne = await connect();

            await conne.query('UPDATE totalmesas set ? WHERE id = ?', [update, id_update])
            await conne.end()

            return res.json({
                message: 'Total Mesa actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const totalmesaController = new TotalMesaController();

