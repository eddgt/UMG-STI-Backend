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
exports.detalleCompraController = void 0;
const database_1 = require("../database");
class DetalleCompraController {
    detallecompra(req, res) {
        res.json({
            message: 'detalle compra is start'
        });
    }
    getDetalleCompra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const detallecompra = yield conne.query('SELECT * FROM detalle_compra');
            return res.json(detallecompra[0]);
        });
    }
    createDetalleCompra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newDetalleCompra = req.body;
                const conne = yield (0, database_1.connect)();
                yield conne.query('INSERT INTO detalle_compra SET ?', [newDetalleCompra]);
                return res.json({
                    message: 'Detalle Compra creado'
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
            const id_compra = req.params.id;
            const conne = yield (0, database_1.connect)();
            const detallecompra = yield conne.query('SELECT * FROM detalle_compra WHERE id = ?', [id_compra]);
            return res.json(detallecompra[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM detalle_compra WHERE id = ? ', [id_delete]);
                return res.json({
                    message: 'Detalle Compra eliminada'
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
                yield conne.query('UPDATE detalle_compra set ? WHERE id = ?', [update, id_delete]);
                yield conne.end();
                return res.json({
                    message: 'Detalle Compra actualizada'
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
exports.detalleCompraController = new DetalleCompraController();
