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
exports.totalmesaController = void 0;
const database_1 = require("../database");
class TotalMesaController {
    mesa(req, res) {
        res.json({
            message: 'Total Mesa is start'
        });
    }
    getTotalMesa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const mesa = yield conne.query('SELECT * FROM totalmesas');
            yield conne.end();
            return res.json(mesa[0]);
        });
    }
    createTotalMesa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTotalMesa = req.body;
                //console.log(newMesa);
                const conne = yield (0, database_1.connect)();
                const result = yield conne.query('INSERT INTO totalmesas SET ?', [newTotalMesa]);
                yield conne.end();
                return res.json({
                    message: 'Total Mesa creado',
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
            const id_mesa = req.params.idm;
            const id_factura = req.params.idf;
            const conne = yield (0, database_1.connect)();
            const totalmesa = yield conne.query('SELECT * FROM totalmesas WHERE id_mesa = ? and id_factura = ?', [id_mesa, id_factura]);
            yield conne.end();
            return res.json(totalmesa[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM totalmesa WHERE id = ? ', [id_delete]);
                yield conne.end();
                return res.json({
                    message: 'Total Mesa eliminado'
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
                yield conne.query('UPDATE totalmesas set ? WHERE id = ?', [update, id_update]);
                yield conne.end();
                return res.json({
                    message: 'Total Mesa actualizado'
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
exports.totalmesaController = new TotalMesaController();
