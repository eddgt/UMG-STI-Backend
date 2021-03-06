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
exports.deliveryController = void 0;
const database_1 = require("../database");
class DeliveryController {
    delivery(req, res) {
        res.json({
            message: 'delivery is start'
        });
    }
    getDelivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conne = yield database_1.connect();
            const delivery = yield conne.query('SELECT * FROM delivery');
            return res.json(delivery[0]);
        });
    }
    createDelivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newDelivery = req.body;
            //console.log(newdelivery);
            const conne = yield database_1.connect();
            yield conne.query('INSERT INTO delivery SET ?', [newDelivery]);
            return res.json({
                message: 'Delivery creado'
            });
        });
    }
    Obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_delivery = req.params.id;
            const conne = yield database_1.connect();
            const delivery = yield conne.query('SELECT * FROM delivery WHERE id = ?', [id_delivery]);
            return res.json(delivery[0]);
        });
    }
    Eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_delete = req.params.id;
            const conne = yield database_1.connect();
            yield conne.query('DELETE FROM delivery WHERE id = ? ', [id_delete]);
            return res.json({
                message: 'delivery eliminado'
            });
        });
    }
    Actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_delete = req.params.id;
            const update = req.body;
            const conne = yield database_1.connect();
            yield conne.query('UPDATE delivery set ? WHERE id = ?', [update, id_delete]);
            return res.json({
                message: 'delivery actualizado'
            });
        });
    }
}
exports.deliveryController = new DeliveryController();
