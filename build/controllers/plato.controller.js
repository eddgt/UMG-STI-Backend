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
exports.platoController = void 0;
const database_1 = require("../database");
class PlatoController {
    plato(req, res) {
        res.json({
            message: 'Plato is start'
        });
    }
    getPlato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const plato = yield conne.query('SELECT * FROM plato');
            yield conne.end();
            return res.json(plato[0]);
        });
    }
    createplato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPlato = req.body;
                //console.log(newPlato);
                const conne = yield (0, database_1.connect)();
                yield conne.query('INSERT INTO plato SET ?', [newPlato]);
                yield conne.end();
                return res.json({
                    message: 'Plato creado'
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
            const id_plato = req.params.id;
            const conne = yield (0, database_1.connect)();
            const plato = yield conne.query('SELECT * FROM plato WHERE id = ?', [id_plato]);
            yield conne.end();
            return res.json(plato[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM plato WHERE id = ? ', [id_delete]);
                yield conne.end();
                return res.json({
                    message: 'Plato eliminado'
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
                const id_plato = req.params.id;
                const update = req.body;
                const conne = yield (0, database_1.connect)();
                yield conne.query('UPDATE plato set ? WHERE id = ?', [update, id_plato]);
                yield conne.end();
                return res.json({
                    message: 'Plato actualizado'
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
exports.platoController = new PlatoController();
