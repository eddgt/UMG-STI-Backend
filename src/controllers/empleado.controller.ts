import { Request, Response } from 'express';

import { connect } from '../database';

import { Empleado } from '../interface/empleado.interface';

class EmpleadoController {

    public empleado(req: Request, res: Response) {
        res.json({
            message: 'Empleado is start'
        });
    }

    public async getEmpleado(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const empleado = await conne.query('SELECT * FROM employees');
        await conne.end()
        
        return res.json(empleado[0]);
    }

    public async createEmpleado(req: Request, res: Response): Promise<Response> {
        try {
            const newEmpleado: Empleado = req.body;

            const conne = await connect();
            await conne.query('INSERT INTO employees SET ?', [newEmpleado]);
            await conne.end()

            return res.json({
                message: 'Empleado creado'
            });
        } catch (error) {
            return res.json({
                message: error
            });
        }
    }

    public async Obtener(req: Request, res: Response): Promise<Response> {
        try {
            const id_empleado = req.params.id;

            const conne = await connect();

            const empleado = await conne.query('SELECT * FROM employees WHERE id = ?', [id_empleado]);
            await conne.end()

            return res.json(empleado[0]);
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

            await conne.query('DELETE FROM employees WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'Empleado eliminado'
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
            const update: Empleado = req.body;

            const conne = await connect();

            await conne.query('UPDATE employees set ? WHERE id = ?', [update, id_update])
            await conne.end()

            return res.json({
                message: 'Empleado actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }
    }
}

export const empleadoController = new EmpleadoController();

