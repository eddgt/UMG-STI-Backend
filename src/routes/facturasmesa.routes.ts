import { Router } from 'express'

import { facturaController } from '../controllers/factura.controller'


class FacturaRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/:id', facturaController.ObtenerFacturasMesa)

    }


}

const facturaRoutes = new FacturaRoutes();

export default facturaRoutes.router;
