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
exports.facturaController = void 0;
const database_1 = require("../database");
class FacturaController {
    factura(req, res) {
        res.json({
            message: 'Factura is start'
        });
    }
    getFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const factura = yield conne.query('SELECT * FROM factura');
            return res.json(factura[0]);
        });
    }
    createFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newFactura = req.body;
                const conne = yield (0, database_1.connect)();
                const result = yield conne.query('INSERT INTO factura SET ?', [newFactura]);
                return res.json({
                    message: 'Factura creada',
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
            const id_factura = req.params.id;
            const conne = yield (0, database_1.connect)();
            const factura = yield conne.query('SELECT * FROM factura WHERE id = ?', [id_factura]);
            return res.json(factura[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM factura WHERE id = ? ', [id_delete]);
                return res.json({
                    message: 'Factura eliminada'
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
                yield conne.query('UPDATE factura set ? WHERE id = ?', [update, id_delete]);
                return res.json({
                    message: 'Factura actualizada'
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
exports.facturaController = new FacturaController();
