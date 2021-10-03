"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plato_controller_1 = require("../controllers/plato.controller");
class PlatoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', plato_controller_1.platoController.getPlato);
        this.router.post('/', plato_controller_1.platoController.createplato);
        this.router.get('/:id', plato_controller_1.platoController.Obtener);
        this.router.delete('/:id', plato_controller_1.platoController.Eliminar);
        this.router.put('/:id', plato_controller_1.platoController.Actualizar);
    }
}
const platoRoutes = new PlatoRoutes();
exports.default = platoRoutes.router;
