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
exports.reporteventasController = void 0;
const database_1 = require("../database");
// import { ReporteVentas } from '../interface/reporteventas.interface';
class ReporteVentasController {
    reporteventas(req, res) {
        res.json({
            message: 'Reporte ventas is start'
        });
    }
    getReportePorFecha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inicio = req.body.desde;
            const fin = req.body.hasta;
            const conne = yield (0, database_1.connect)();
            const reporte = yield conne.query('SELECT a.mesa_id mesa, ' +
                'b.cantidad, a.delivery_id delivery, ' +
                'a.date_fact fecha , b.precio_id ' +
                'FROM factura a ' +
                'inner join fact_detalle b on a.id = b.factura_id ' +
                'where a.date_fact between ? and ? ' +
                'order by 1', [inicio, fin]);
            console.log(' ' + inicio + ' ' + fin + ' ' + reporte);
            return res.json(reporte[0]);
        });
    }
}
exports.reporteventasController = new ReporteVentasController();
