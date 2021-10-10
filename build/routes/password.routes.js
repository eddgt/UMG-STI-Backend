"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const password_controller_1 = require("../controllers/password.controller");
class PasswordRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.put('/', password_controller_1.passwordController.Actualizar);
    }
}
const passwordRoutes = new PasswordRoutes();
exports.default = passwordRoutes.router;
