"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cliente_controller_1.clienteController.getCliente);
        this.router.post('/', cliente_controller_1.clienteController.createCliente);
        this.router.get('/:id', cliente_controller_1.clienteController.Obtener);
        this.router.delete('/:id', cliente_controller_1.clienteController.Eliminar);
        this.router.put('/:id', cliente_controller_1.clienteController.Actualizar);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
