import { Router } from 'express'

import { reporteventasController } from '../controllers/reporteventas.controller'


class ReporteVentasRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/:id', reporteventasController.getReporteByFacturaId);

    }


}

const reporteventasdetalleRoutes = new ReporteVentasRoutes();

export default reporteventasdetalleRoutes.router;
