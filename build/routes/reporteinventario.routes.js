"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reporteinventario_controller_1 = require("../controllers/reporteinventario.controller");
class ReporteInventarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', reporteinventario_controller_1.repinventarioController.getReporte);
    }
}
const repinventarioRoutes = new ReporteInventarioRoutes();
exports.default = repinventarioRoutes.router;
