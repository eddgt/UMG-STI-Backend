"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipopago_controller_1 = require("../controllers/tipopago.controller");
class TipoPagoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tipopago_controller_1.tipopagoController.getTipoPago);
        this.router.post('/', tipopago_controller_1.tipopagoController.createTipoPago);
        this.router.get('/:id', tipopago_controller_1.tipopagoController.Obtener);
        this.router.delete('/:id', tipopago_controller_1.tipopagoController.Eliminar);
        this.router.put('/:id', tipopago_controller_1.tipopagoController.Actualizar);
    }
}
const tipopagoRoutes = new TipoPagoRoutes();
exports.default = tipopagoRoutes.router;
