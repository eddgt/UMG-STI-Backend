"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportecomisiones_controller_1 = require("../controllers/reportecomisiones.controller");
class ReporteComisionesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', reportecomisiones_controller_1.reportecomisionesController.getReportePorFecha);
    }
}
const reportecomisionesRoutes = new ReporteComisionesRoutes();
exports.default = reportecomisionesRoutes.router;
