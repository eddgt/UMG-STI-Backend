import { Router } from 'express'

import { platoController } from '../controllers/plato.controller'


class PlatoRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/:categoria', platoController.ObtenerPlatosPorCategoria)
    }


}

const platoRoutes = new PlatoRoutes();

export default platoRoutes.router;
