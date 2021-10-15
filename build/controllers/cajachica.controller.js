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
exports.cajachicaController = void 0;
const database_1 = require("../database");
class CajaChicaController {
    cajachica(req, res) {
        res.json({
            message: 'Caja Chica is start'
        });
    }
    getCajaChica(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const cajachica = yield conne.query('SELECT * FROM caja_chica');
            yield conne.end();
            return res.json(cajachica[0]);
        });
    }
    createCajaChica(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCajaChica = req.body;
                const conne = yield (0, database_1.connect)();
                const result = yield conne.query('INSERT INTO caja_chica SET ?', [newCajaChica]);
                yield conne.end();
                return res.json({
                    message: 'Caja Chica creada',
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
            const id_caja = req.params.id;
            const conne = yield (0, database_1.connect)();
            const cajachica = yield conne.query('SELECT * FROM caja_chica WHERE id = ?', [id_caja]);
            yield conne.end();
            return res.json(cajachica[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM caja_chica WHERE id = ? ', [id_delete]);
                yield conne.end();
                return res.json({
                    message: 'Caja Chija eliminada'
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
                yield conne.query('UPDATE caja_chica set ? WHERE id = ?', [update, id_update]);
                yield conne.end();
                return res.json({
                    message: 'Caja Chica actualizada'
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
exports.cajachicaController = new CajaChicaController();
