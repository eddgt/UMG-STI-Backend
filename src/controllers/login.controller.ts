import { Request, Response } from 'express';

import { connect } from '../database';

import { Login } from '../interface/login.interface';

class LoginController {

    public login(req: Request, res: Response) {
        res.json({
            message: 'Login is start'
        });
    }

    public async loginAuth(req: Request, res: Response): Promise<Response> {
        console.log("begin auntenticar...");
        try {
            const newLogin: Login = req.body;

            const conne = await connect();

            const login = await conne.query('SELECT usuario, nombre, email FROM Usuarios WHERE email = ? and pass = ?', [newLogin.email, newLogin.pass]);
            console.log("begin auntenticar result -> " + JSON.stringify(login[0]));
            const resultObj = JSON.stringify(login[0])
            console.log("resultObj -> " + JSON.stringify(login[0]));
            if (resultObj.length > 2) {
                console.log("If");
                console.log(resultObj);
                console.log(resultObj.length);
                return res.json(login[0]);
            } else {
                console.log("else");
                return res.json({ message: "Usiario o Password inválidos", messageCode: 1 });
            }


        } catch (error) {
            console.log("catch try auntenticar..." + error);
            return res.json({
                message: error
            });

        }
    }

}

export const loginController = new LoginController();