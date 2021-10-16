"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalmesa_controller_1 = require("../controllers/totalmesa.controller");
class TotalMesaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', totalmesa_controller_1.totalmesaController.getTotalMesa);
        this.router.post('/', totalmesa_controller_1.totalmesaController.createTotalMesa);
        this.router.get('/:idm/:idf', totalmesa_controller_1.totalmesaController.Obtener);
        this.router.delete('/:id', totalmesa_controller_1.totalmesaController.Eliminar);
        this.router.put('/:id', totalmesa_controller_1.totalmesaController.Actualizar);
    }
}
const totalmesaRoutes = new TotalMesaRoutes();
exports.default = totalmesaRoutes.router;
