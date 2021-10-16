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
exports.detallefacturaController = void 0;
const database_1 = require("../database");
class DetalleFacturaController {
    detallefactura(req, res) {
        res.json({
            message: 'DetalleFactura is start'
        });
    }
    getDetalleFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const detallefactura = yield conne.query('SELECT a.*, b.descripcion FROM fact_detalle a inner join plato b on a.plato_id = b.id');
            yield conne.end();
            return res.json(detallefactura[0]);
        });
    }
    createDetalleFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newDetalleFactura = req.body;
                const conne = yield (0, database_1.connect)();
                yield conne.query('INSERT INTO fact_detalle SET ?', [newDetalleFactura]);
                yield conne.end();
                return res.json({
                    message: 'DetalleFactura creado'
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
            const detallefactura = yield conne.query('SELECT a.*, b.descripcion FROM fact_detalle a inner join plato b on a.plato_id = b.id WHERE a.factura_id = ?', [id_factura]);
            yield conne.end();
            return res.json(detallefactura[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM fact_detalle WHERE id = ? ', [id_delete]);
                yield conne.end();
                return res.json({
                    message: 'DetalleFactura eliminada'
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
                const id_update = req.params.id;
                const update = req.body;
                const conne = yield (0, database_1.connect)();
                yield conne.query('UPDATE fact_datelle set ? WHERE id = ?', [update, id_update]);
                yield conne.end();
                return res.json({
                    message: 'DetalleFactura actualizado'
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
exports.detallefacturaController = new DetalleFacturaController();
