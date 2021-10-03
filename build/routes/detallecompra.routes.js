"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallecompra_controller_1 = require("../controllers/detallecompra.controller");
class DetalleCompraRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', detallecompra_controller_1.detalleCompraController.getDetalleCompra);
        this.router.post('/', detallecompra_controller_1.detalleCompraController.createDetalleCompra);
        this.router.get('/:id', detallecompra_controller_1.detalleCompraController.Obtener);
        this.router.delete('/:id', detallecompra_controller_1.detalleCompraController.Eliminar);
        this.router.put('/:id', detallecompra_controller_1.detalleCompraController.Actualizar);
    }
}
const detalleCompraRoutes = new DetalleCompraRoutes();
exports.default = detalleCompraRoutes.router;
