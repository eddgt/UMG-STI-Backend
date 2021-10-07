"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const database_1 = require("../database");
class PostController {
    post(req, res) {
        res.json({
            texto: 'post is start'
        });
    }
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const post = yield conne.query('SELECT * FROM posts');
            return res.json(post[0]);
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPos = req.body;
            //console.log(newPos);
            const conne = yield (0, database_1.connect)();
            yield conne.query('INSERT INTO posts SET ?', [newPos]);
            return res.json({
                text: 'publicacion creada'
            });
        });
    }
    Obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_post = req.params.id;
            const conne = yield (0, database_1.connect)();
            const post = yield conne.query('SELECT * FROM posts WHERE id = ?', [id_post]);
            return res.json(post[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_delete = req.params.id;
            const conne = yield (0, database_1.connect)();
            yield conne.query('DELETE FROM posts WHERE id = ? ', [id_delete]);
            return res.json({
                texto: 'Publicacion eliminada'
            });
        });
    }
    Actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_delete = req.params.id;
            const update = req.body;
            const conne = yield (0, database_1.connect)();
            yield conne.query('UPDATE posts set ? WHERE id = ?', [update, id_delete]);
            return res.json({
                message: 'post update'
            });
        });
    }
}
exports.postController = new PostController();
