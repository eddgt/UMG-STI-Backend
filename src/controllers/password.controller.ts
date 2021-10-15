import { Request, Response } from 'express';

import { connect } from '../database';

import { Password } from '../interface/password.interface';

class PasswordController {

    public password(req: Request, res: Response) {
        res.json({
            message: 'Password is start'
        });
    }

    public async Actualizar(req: Request, res: Response): Promise<Response> {
        try {
            const update: Password = req.body;

            const conne = await connect();

            const result = await conne.query('UPDATE Usuarios set pass = ? WHERE email = ?', [update.pass, update.email])
            console.log("result " + JSON.stringify(result[0]));
            await conne.end()
            
            let resultObj = { affectedRows: null, fieldCount: null, RowDataPacket: null, OkPacket: null, ResultSetHeader: null }
            resultObj = result[0];
            console.log("resultObj " + resultObj);            

            if (resultObj.affectedRows === 1) {
                return res.json({
                    messageCode: 0,
                    message: 'Contraseña actualizada'
                })
            } else {
                return res.json({
                    messageCode: 1,
                    message: 'Usuario no existe'

                })
            }
            
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const passwordController = new PasswordController();