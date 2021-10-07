"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
class PostRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', post_controller_1.postController.getPost);
        this.router.post('/', post_controller_1.postController.createPost);
        this.router.get('/:id', post_controller_1.postController.Obtener);
        this.router.delete('/:id', post_controller_1.postController.Eliminar);
        this.router.put('/:id', post_controller_1.postController.Actualizar);
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
