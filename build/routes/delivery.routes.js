"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const delivery_controller_1 = require("../controllers/delivery.controller");
class DeliveryRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', delivery_controller_1.deliveryController.getDelivery);
        this.router.post('/', delivery_controller_1.deliveryController.createDelivery);
        this.router.get('/:id', delivery_controller_1.deliveryController.Obtener);
        this.router.delete('/:id', delivery_controller_1.deliveryController.Eliminar);
        this.router.put('/:id', delivery_controller_1.deliveryController.Actualizar);
    }
}
const deliveryRoutes = new DeliveryRoutes();
exports.default = deliveryRoutes.router;
