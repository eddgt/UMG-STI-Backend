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
            try {
                const conne = yield (0, database_1.connect)();
                const cliente = yield conne.query('SELECT * FROM cliente');
                return res.json(cliente[0]);
            }
            catch (error) {
                return res.json({
                    message: error
                });
            }
        });
    }
    createCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCliente = req.body;
                //console.log(newCliente);
                const conne = yield (0, database_1.connect)();
                const result = yield conne.query('INSERT INTO cliente SET ?', [newCliente]);
                return res.json({
                    message: 'Cliente creado',
                    id: result[0].insertId
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
            try {
                const id_cliente = req.params.id;
                const conne = yield (0, database_1.connect)();
                const cliente = yield conne.query('SELECT * FROM cliente WHERE id = ?', [id_cliente]);
                return res.json(cliente[0]);
            }
            catch (error) {
                return res.json({
                    message: error
                });
            }
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM cliente WHERE id = ? ', [id_delete]);
                return res.json({
                    message: 'Cliente eliminado'
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
                yield conne.query('UPDATE cliente set ? WHERE id = ?', [update, id_delete]);
                return res.json({
                    message: 'cliente actualizado'
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
exports.clienteController = new ClienteController();
