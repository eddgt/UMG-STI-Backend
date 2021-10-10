import { Router } from 'express'

import { passwordController } from '../controllers/password.controller'

class PasswordRoutes {

    public router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.put('/', passwordController.Actualizar)        

    }

}

const passwordRoutes = new PasswordRoutes();

export default passwordRoutes.router;