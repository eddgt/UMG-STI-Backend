"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallefactura_controller_1 = require("../controllers/detallefactura.controller");
class DetalleFacturaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', detallefactura_controller_1.detallefacturaController.getDetalleFactura);
        this.router.post('/', detallefactura_controller_1.detallefacturaController.createDetalleFactura);
        this.router.get('/:id', detallefactura_controller_1.detallefacturaController.Obtener);
        this.router.delete('/:id', detallefactura_controller_1.detallefacturaController.Eliminar);
        this.router.put('/:id', detallefactura_controller_1.detallefacturaController.Actualizar);
    }
}
const detallefacturaRoutes = new DetalleFacturaRoutes();
exports.default = detallefacturaRoutes.router;
