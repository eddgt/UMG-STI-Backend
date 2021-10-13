import { Router } from 'express'

import { reportecomisionesController } from '../controllers/reportecomisiones.controller'

class ReporteComisionesRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.post('/', reportecomisionesController.getReportePorFecha);

    }


}

const reportecomisionesRoutes = new ReporteComisionesRoutes();

export default reportecomisionesRoutes.router;
