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
exports.inventarioController = void 0;
const database_1 = require("../database");
class InventarioController {
    inventario(req, res) {
        res.json({
            message: 'Inventario is start'
        });
    }
    getInventario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const inventario = yield conne.query('SELECT * FROM inventario');
            yield conne.end();
            return res.json(inventario[0]);
        });
    }
    createInventario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newInventario = req.body;
                const conne = yield (0, database_1.connect)();
                const result = yield conne.query('INSERT INTO inventario SET ?', [newInventario]);
                yield conne.end();
                return res.json({
                    message: 'Inventario creado',
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
            const id_inventario = req.params.id;
            const conne = yield (0, database_1.connect)();
            const inventario = yield conne.query('SELECT * FROM inventario WHERE id = ?', [id_inventario]);
            yield conne.end();
            return res.json(inventario[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM inventario WHERE id = ? ', [id_delete]);
                yield conne.end();
                return res.json({
                    message: 'Inventario eliminado'
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
                yield conne.query('UPDATE inventario set ? WHERE id = ?', [update, id_delete]);
                yield conne.end();
                return res.json({
                    message: 'Inventario actualizado'
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
exports.inventarioController = new InventarioController();
