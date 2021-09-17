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
exports.compraController = void 0;
const database_1 = require("../database");
class CompraController {
    compra(req, res) {
        res.json({
            message: 'compra is start'
        });
    }
    getCompra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield database_1.connect();
            const compra = yield conne.query('SELECT * FROM compra');
            return res.json(compra[0]);
        });
    }
    createCompra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCompra = req.body;
            //console.log(newCompra);
            const conne = yield database_1.connect();
            yield conne.query('INSERT INTO compra SET ?', [newCompra]);
            return res.json({
                message: 'Compra creado'
            });
        });
    }
    Obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_compra = req.params.id;
            const conne = yield database_1.connect();
            const compra = yield conne.query('SELECT * FROM compra WHERE id = ?', [id_compra]);
            return res.json(compra[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_delete = req.params.id;
            const conne = yield database_1.connect();
            yield conne.query('DELETE FROM compra WHERE id = ? ', [id_delete]);
            return res.json({
                message: 'Compra eliminada'
            });
        });
    }
    Actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_delete = req.params.id;
            const update = req.body;
            const conne = yield database_1.connect();
            yield conne.query('UPDATE compra set ? WHERE id = ?', [update, id_delete]);
            return res.json({
                message: 'Compra actualizada'
            });
        });
    }
}
exports.compraController = new CompraController();
