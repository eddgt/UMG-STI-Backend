import { Request, Response } from 'express';

import { connect } from '../database';

import { Usuario } from '../interface/usuario.interface'

class UsuarioController {

    public usuario(req: Request, res: Response) {
        res.json({
            message: 'usuario is start'
        });
    }

    public async getUsuario(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const usuario = await conne.query('SELECT id, usuario, email, rol, nombre, date_create FROM Usuarios');
        return res.json(usuario[0]);
    }

    public async createUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const newUsuario: Usuario = req.body;
            //console.log(newUsuario);

            const conne = await connect();
            const result = await conne.query('INSERT INTO Usuarios SET ?', [newUsuario]);
            await conne.end()

            console.log(result);
            return res.json({
                message: 'Usuario creado',
                id: result[0].insertId
            });
        } catch (error) {
            return res.json({
                message: error
            });
        }
    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_usuario = req.params.id;

        const conne = await connect();

        const usuario = await conne.query('SELECT id, usuario, email, rol, nombre, date_create FROM Usuarios WHERE id = ?', [id_usuario]);
        await conne.end()

        return res.json(usuario[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {
        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('DELETE FROM Usuarios WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'usuario eliminado'
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
            const update: Usuario = req.body;

            const conne = await connect();

            await conne.query('UPDATE Usuarios set ? WHERE id = ?', [update, id_delete])
            await conne.end()

            return res.json({
                message: 'Usuario actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }
    }
}

export const usuarioController = new UsuarioController();

