import { Router } from 'express'

import { reporteventasController } from '../controllers/reporteventas.controller'


class ReporteVentasRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.post('/', reporteventasController.getReportePorFecha);

    }


}

const reporteventasRoutes = new ReporteVentasRoutes();

export default reporteventasRoutes.router;
