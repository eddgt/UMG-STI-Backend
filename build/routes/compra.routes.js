"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compra_controller_1 = require("../controllers/compra.controller");
class CompraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', compra_controller_1.compraController.getCompra);
        this.router.post('/', compra_controller_1.compraController.createCompra);
        this.router.get('/:id', compra_controller_1.compraController.Obtener);
        this.router.delete('/:id', compra_controller_1.compraController.Eliminar);
        this.router.put('/:id', compra_controller_1.compraController.Actualizar);
    }
}
const compraRoutes = new CompraRoutes();
exports.default = compraRoutes.router;
