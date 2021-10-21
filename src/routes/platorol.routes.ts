import { Router } from 'express'

import { platoController } from '../controllers/plato.controller'


class PlatoRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/:rol', platoController.ObtenerPlatosPorRol)
    }


}

const platoRoutes = new PlatoRoutes();

export default platoRoutes.router;
