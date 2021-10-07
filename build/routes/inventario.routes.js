"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventario_controller_1 = require("../controllers/inventario.controller");
class InventarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', inventario_controller_1.inventarioController.getInventario);
        this.router.post('/', inventario_controller_1.inventarioController.createInventario);
        this.router.get('/:id', inventario_controller_1.inventarioController.Obtener);
        this.router.delete('/:id', inventario_controller_1.inventarioController.Eliminar);
        this.router.put('/:id', inventario_controller_1.inventarioController.Actualizar);
    }
}
const inventarioRoutes = new InventarioRoutes();
exports.default = inventarioRoutes.router;
