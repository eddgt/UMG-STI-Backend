"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reporteventas_controller_1 = require("../controllers/reporteventas.controller");
class ReporteVentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', reporteventas_controller_1.reporteventasController.getReportePorFecha);
    }
}
const reporteventasRoutes = new ReporteVentasRoutes();
exports.default = reporteventasRoutes.router;
