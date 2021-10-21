import { Request, Response } from 'express';

import { connect } from '../database';

import { Inventario } from '../interface/inventario.interface';

class InventarioController {

    public inventario(req: Request, res: Response) {
        res.json({
            message: 'Inventario is start'
        });
    }

    public async getInventario(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const inventario = await conne.query('SELECT * FROM inventario');
        await conne.end()
        return res.json(inventario[0]);
    }

    public async createInventario(req: Request, res: Response): Promise<Response> {
        try {
            const newInventario: Inventario = req.body;

            if (newInventario.movimiento === 'SALIDA' || newInventario.movimiento === 'EGRESO') {
                newInventario.cantidad = newInventario.cantidad * (-1)
            }
            const conne = await connect();
            const result = await conne.query('INSERT INTO inventario SET ?', [newInventario]);
            await conne.end()

            return res.json({
                message: 'Inventario creado',
                id: result[0].insertId
            });

        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_inventario = req.params.id;

        const conne = await connect();

        const inventario = await conne.query('SELECT * FROM inventario WHERE id = ?', [id_inventario]);
        await conne.end()

        return res.json(inventario[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM inventario WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'Inventario eliminado'
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
            const update: Inventario = req.body;

            const conne = await connect();

            await conne.query('UPDATE inventario set ? WHERE id = ?', [update, id_update])
            await conne.end()

            return res.json({
                message: 'Inventario actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const inventarioController = new InventarioController();

