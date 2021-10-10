"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', login_controller_1.loginController.loginAuth);
        console.log("begin router...");
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
