"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleado_controller_1 = require("../controllers/empleado.controller");
class EmpleadoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', empleado_controller_1.empleadoController.getEmpleado);
        this.router.post('/', empleado_controller_1.empleadoController.createEmpleado);
        this.router.get('/:id', empleado_controller_1.empleadoController.Obtener);
        this.router.delete('/:id', empleado_controller_1.empleadoController.Eliminar);
        this.router.put('/:id', empleado_controller_1.empleadoController.Actualizar);
    }
}
const empleadoRoutes = new EmpleadoRoutes();
exports.default = empleadoRoutes.router;
