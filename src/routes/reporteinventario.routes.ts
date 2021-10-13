import { Router } from 'express'

import { repinventarioController } from '../controllers/reporteinventario.controller'

class ReporteInventarioRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', repinventarioController.getReporte);

    }


}

const repinventarioRoutes = new ReporteInventarioRoutes();

export default repinventarioRoutes.router;
