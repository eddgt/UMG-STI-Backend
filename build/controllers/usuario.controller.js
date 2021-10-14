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
exports.usuarioController = void 0;
const database_1 = require("../database");
class UsuarioController {
    usuario(req, res) {
        res.json({
            message: 'usuario is start'
        });
    }
    getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const usuario = yield conne.query('SELECT usuario, email, nombre, date_create FROM Usuarios');
            return res.json(usuario[0]);
        });
    }
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUsuario = req.body;
                //console.log(newUsuario);
                const conne = yield (0, database_1.connect)();
                const result = yield conne.query('INSERT INTO Usuarios SET ?', [newUsuario]);
                console.log(result);
                return res.json({
                    message: 'Usuario creado'
                });
            }
            catch (error) {
                return res.json({
                    message: error
                });
            }
        });
    }
    Obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_usuario = req.params.id;
            const conne = yield (0, database_1.connect)();
            const usuario = yield conne.query('SELECT usuario, email, nombre, date_create FROM Usuarios WHERE id = ?', [id_usuario]);
            return res.json(usuario[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM Usuarios WHERE id = ? ', [id_delete]);
                return res.json({
                    message: 'usuario eliminado'
                });
            }
            catch (error) {
                return res.json({
                    message: error
                });
            }
        });
    }
    Actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const update = req.body;
                const conne = yield (0, database_1.connect)();
                yield conne.query('UPDATE Usuarios set ? WHERE id = ?', [update, id_delete]);
                return res.json({
                    message: 'Usuario actualizado'
                });
            }
            catch (error) {
                return res.json({
                    message: error
                });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
