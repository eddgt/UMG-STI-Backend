"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mesa_controller_1 = require("../controllers/mesa.controller");
class MesaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',mesaController.post)
        this.router.get('/', mesa_controller_1.mesaController.getMesa);
        this.router.post('/', mesa_controller_1.mesaController.createMesa);
        this.router.get('/:id', mesa_controller_1.mesaController.Obtener);
        this.router.delete('/:id', mesa_controller_1.mesaController.Eliminar);
        this.router.put('/:id', mesa_controller_1.mesaController.Actualizar);
    }
}
const mesaRoutes = new MesaRoutes();
exports.default = mesaRoutes.router;
