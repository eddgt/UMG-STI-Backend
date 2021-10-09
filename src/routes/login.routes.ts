import { Router } from 'express'

import { loginController } from '../controllers/login.controller'

class LoginRoutes {

    public router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.post('/', loginController.loginAuth)
        console.log("begin router...");

    }

}

const loginRoutes = new LoginRoutes();

export default loginRoutes.router;