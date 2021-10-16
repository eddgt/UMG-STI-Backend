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
exports.mesaController = void 0;
const database_1 = require("../database");
class MesaController {
    mesa(req, res) {
        res.json({
            message: 'mesa is start'
        });
    }
    getMesa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const mesa = yield conne.query('SELECT * FROM mesa');
            yield conne.end();
            return res.json(mesa[0]);
        });
    }
    createMesa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMesa = req.body;
                //console.log(newMesa);
                const conne = yield (0, database_1.connect)();
                const result = yield conne.query('INSERT INTO mesa SET ?', [newMesa]);
                yield conne.end();
                return res.json({
                    message: 'Mesa creada',
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
            const id_mesa = req.params.id;
            const conne = yield (0, database_1.connect)();
            const mesa = yield conne.query('SELECT * FROM mesa WHERE id = ?', [id_mesa]);
            yield conne.end();
            return res.json(mesa[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM mesa WHERE id = ? ', [id_delete]);
                yield conne.end();
                return res.json({
                    message: 'Mesa eliminada'
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
                yield conne.query('UPDATE mesa set ? WHERE id = ?', [update, id_delete]);
                yield conne.end();
                return res.json({
                    message: 'Mesa actualizada'
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
exports.mesaController = new MesaController();
