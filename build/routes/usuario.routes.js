"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuario_controller_1.usuarioController.getUsuario);
        this.router.post('/', usuario_controller_1.usuarioController.createUsuario);
        this.router.get('/:id', usuario_controller_1.usuarioController.Obtener);
        this.router.delete('/:id', usuario_controller_1.usuarioController.Eliminar);
        this.router.put('/:id', usuario_controller_1.usuarioController.Actualizar);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
