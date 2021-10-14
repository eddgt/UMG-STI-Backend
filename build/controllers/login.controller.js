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
exports.loginController = void 0;
const database_1 = require("../database");
class LoginController {
    login(req, res) {
        res.json({
            message: 'Login is start'
        });
    }
    loginAuth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("begin auntenticar...");
            try {
                const newLogin = req.body;
                const conne = yield (0, database_1.connect)();
                const login = yield conne.query('SELECT \'usuario válido\' message,  usuario, rol, nombre, email FROM Usuarios WHERE email = ? and pass = ?', [newLogin.email, newLogin.pass]);
                console.log("begin auntenticar result -> " + JSON.stringify(login[0]));
                const resultObj = JSON.stringify(login[0]);
                console.log("resultObj -> " + JSON.stringify(login[0]));
                if (resultObj.length > 2) {
                    console.log("If");
                    console.log(resultObj);
                    console.log(resultObj.length);
                    return res.json(login[0]);
                }
                else {
                    console.log("else");
                    return res.json({ message: "Usiario o Password inválidos", messageCode: 1 });
                }
            }
            catch (error) {
                console.log("catch try auntenticar..." + error);
                return res.json({
                    message: error
                });
            }
        });
    }
}
exports.loginController = new LoginController();
