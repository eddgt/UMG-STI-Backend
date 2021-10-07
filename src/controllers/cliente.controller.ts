import { Request, Response } from 'express';

import { connect } from '../database';

import { Cliente } from '../interface/cliente.interface';

class ClienteController {

    public cliente(req: Request, res: Response) {
        res.json({
            message: 'cliente is start'
        });
    }

    public async getCliente(req: Request, res: Response): Promise<Response> {
        try {
            const conne = await connect();

            const cliente = await conne.query('SELECT * FROM cliente');
            return res.json(cliente[0]);
        } catch (error) {
            return res.json({
                message: error
            });
        }
    }

    public async createCliente(req: Request, res: Response): Promise<Response> {

        try {
            const newCliente: Cliente = req.body;
            //console.log(newCliente);

            const conne = await connect();
            await conne.query('INSERT INTO cliente SET ?', [newCliente]);

            return res.json({
                message: 'Cliente creado'
            });
        } catch (error) {
            return res.json({
                message: error
            });
        }
    }

    public async Obtener(req: Request, res: Response): Promise<Response> {
        try {
            const id_cliente = req.params.id;

            const conne = await connect();

            const cliente = await conne.query('SELECT * FROM cliente WHERE id = ?', [id_cliente]);

            return res.json(cliente[0]);
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

            await conne.query('DELETE FROM cliente WHERE id = ? ', [id_delete]);

            return res.json({
                message: 'Cliente eliminado'
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
            const update: Cliente = req.body;

            const conne = await connect();

            await conne.query('UPDATE cliente set ? WHERE id = ?', [update, id_delete])

            return res.json({
                message: 'cliente actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }
    }
}

export const clienteController = new ClienteController();

