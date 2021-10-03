"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const factura_controller_1 = require("../controllers/factura.controller");
class FacturaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', factura_controller_1.facturaController.getFactura);
        this.router.post('/', factura_controller_1.facturaController.createFactura);
        this.router.get('/:id', factura_controller_1.facturaController.Obtener);
        this.router.delete('/:id', factura_controller_1.facturaController.Eliminar);
        this.router.put('/:id', factura_controller_1.facturaController.Actualizar);
    }
}
const facturaRoutes = new FacturaRoutes();
exports.default = facturaRoutes.router;
