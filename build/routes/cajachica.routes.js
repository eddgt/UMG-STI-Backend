"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cajachica_controller_1 = require("../controllers/cajachica.controller");
class CajaChicaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cajachica_controller_1.cajachicaController.getCajaChica);
        this.router.post('/', cajachica_controller_1.cajachicaController.createCajaChica);
        this.router.get('/:id', cajachica_controller_1.cajachicaController.Obtener);
        this.router.delete('/:id', cajachica_controller_1.cajachicaController.Eliminar);
        this.router.put('/:id', cajachica_controller_1.cajachicaController.Actualizar);
    }
}
const cajachicaRoutes = new CajaChicaRoutes();
exports.default = cajachicaRoutes.router;
