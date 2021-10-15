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
exports.empleadoController = void 0;
const database_1 = require("../database");
class EmpleadoController {
    empleado(req, res) {
        res.json({
            message: 'Empleado is start'
        });
    }
    getEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield (0, database_1.connect)();
            const empleado = yield conne.query('SELECT * FROM employees');
            return res.json(empleado[0]);
        });
    }
    createEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newEmpleado = req.body;
                const conne = yield (0, database_1.connect)();
                yield conne.query('INSERT INTO employees SET ?', [newEmpleado]);
                yield conne.end();
                return res.json({
                    message: 'Empleado creado'
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
            try {
                const id_empleado = req.params.id;
                const conne = yield (0, database_1.connect)();
                const empleado = yield conne.query('SELECT * FROM employees WHERE id = ?', [id_empleado]);
                yield conne.end();
                return res.json(empleado[0]);
            }
            catch (error) {
                return res.json({
                    message: error
                });
            }
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_delete = req.params.id;
                const conne = yield (0, database_1.connect)();
                yield conne.query('DELETE FROM employees WHERE id = ? ', [id_delete]);
                yield conne.end();
                return res.json({
                    message: 'Empleado eliminado'
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
                yield conne.query('UPDATE employees set ? WHERE id = ?', [update, id_update]);
                yield conne.end();
                return res.json({
                    message: 'Empleado actualizado'
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
exports.empleadoController = new EmpleadoController();
