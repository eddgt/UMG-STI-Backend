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
exports.clienteController = void 0;
const database_1 = require("../database");
class ClienteController {
    cliente(req, res) {
        res.json({
            message: 'cliente is start'
        });
    }
    getCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield database_1.connect();
            const cliente = yield conne.query('SELECT * FROM cliente');
            return res.json(cliente[0]);
        });
    }
    createCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCliente = req.body;
            //console.log(newCliente);
            const conne = yield database_1.connect();
            yield conne.query('INSERT INTO cliente SET ?', [newCliente]);
            return res.json({
                message: 'Cliente creado'
            });
        });
    }
    Obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_cliente = req.params.id;
            const conne = yield database_1.connect();
            const cliente = yield conne.query('SELECT * FROM cliente WHERE id = ?', [id_cliente]);
            return res.json(cliente[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_delete = req.params.id;
            const conne = yield database_1.connect();
            yield conne.query('DELETE FROM cliente WHERE id = ? ', [id_delete]);
            return res.json({
                message: 'Cliente eliminado'
            });
        });
    }
    Actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_delete = req.params.id;
            const update = req.body;
            const conne = yield database_1.connect();
            yield conne.query('UPDATE cliente set ? WHERE id = ?', [update, id_delete]);
            return res.json({
                message: 'cliente actualizado'
            });
        });
    }
}
exports.clienteController = new ClienteController();
