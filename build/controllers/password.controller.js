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
exports.passwordController = void 0;
const database_1 = require("../database");
class PasswordController {
    password(req, res) {
        res.json({
            message: 'Password is start'
        });
    }
    Actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const update = req.body;
                const conne = yield (0, database_1.connect)();
                const result = yield conne.query('UPDATE Usuarios set pass = ? WHERE email = ?', [update.pass, update.email]);
                console.log("result " + JSON.stringify(result[0]));
                yield conne.end();
                let resultObj = { affectedRows: null, fieldCount: null, RowDataPacket: null, OkPacket: null, ResultSetHeader: null };
                resultObj = result[0];
                console.log("resultObj " + resultObj);
                if (resultObj.affectedRows === 1) {
                    return res.json({
                        messageCode: 0,
                        message: 'Contraseña actualizada'
                    });
                }
                else {
                    return res.json({
                        messageCode: 1,
                        message: 'Usuario no existe'
                    });
                }
            }
            catch (error) {
                return res.json({
                    message: error
                });
            }
        });
    }
}
exports.passwordController = new PasswordController();
