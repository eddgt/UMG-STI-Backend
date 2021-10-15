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
exports.reportecomisionesController = void 0;
const database_1 = require("../database");
// import { ReporteVentas } from '../interface/reporteventas.interface';
class ReporteComisionesController {
    reportecomisiones(req, res) {
        res.json({
            message: 'Reporte comisiones is start'
        });
    }
    getReportePorFecha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inicio = req.body.desde;
            const fin = req.body.hasta;
            const conne = yield (0, database_1.connect)();
            const reporte = yield conne.query('SELECT DATE_FORMAT(a.date_fact, "%Y-%m-%d") fecha, ' +
                'a.delivery_id canal, c.descripcion producto, sum(b.cantidad) cantidad, round(sum(c.precio),2) total ' +
                'FROM factura a ' +
                'inner join fact_detalle b on a.id = b.factura_id ' +
                'inner join plato c on c.id = b.plato_id ' +
                'where a.date_fact between ? and ? ' +
                ' group by a.date_fact, b.cantidad, c.descripcion, c.precio, a.delivery_id', [inicio, fin]);
            yield conne.end();
            // console.log(' ' + inicio + ' ' + fin + ' ' + reporte)
            return res.json(reporte[0]);
        });
    }
}
exports.reportecomisionesController = new ReporteComisionesController();
