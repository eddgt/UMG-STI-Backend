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
exports.tipopagoController = void 0;
const database_1 = require("../database");
class TipoPagoController {
    tipopago(req, res) {
        res.json({
            message: 'TipoPago is start'
        });
    }
    getTipoPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const tipopago = yield conne.query('SELECT * FROM tipo_pago');
            return res.json(tipopago[0]);
        });
    }
    createTipoPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTipoPago = req.body;
                //console.log(newTipoPago);
                const conne = yield (0, database_1.connect)();
                const result = yield conne.query('INSERT INTO tipo_pago SET ?', [newTipoPago]);
                return res.json({
                    message: 'TipoPago creado',
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
            const id_tipopago = req.params.id;
            const conne = yield (0, database_1.connect)();
            const tipopago = yield conne.query('SELECT * FROM tipo_pago WHERE id = ?', [id_tipopago]);
            return res.json(tipopago[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM tipo_pago WHERE id = ? ', [id_delete]);
                return res.json({
                    message: 'tipopago eliminado'
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
                const id_tipopago = req.params.id;
                const update = req.body;
                const conne = yield (0, database_1.connect)();
                yield conne.query('UPDATE tipo_pago set ? WHERE id = ?', [update, id_tipopago]);
                return res.json({
                    message: 'tipopago actualizado'
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
exports.tipopagoController = new TipoPagoController();
