"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const factura_controller_1 = require("../controllers/factura.controller");
class FacturaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', factura_controller_1.facturaController.ObtenerFacturasMesa);
    }
}
const facturaRoutes = new FacturaRoutes();
exports.default = facturaRoutes.router;
