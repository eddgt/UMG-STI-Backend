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
            const reporte = yield conne.query('SELECT c.empresa_serv empresa, ' +
                'round(sum(c.costo_delivery),2) total ' +
                'FROM factura a INNER JOIN fact_detalle b on a.id = b.factura_id ' +
                'INNER JOIN delivery c on c.id = a.delivery_id ' +
                'WHERE a.date_fact between DATE_FORMAT(?, \"%Y-%m-%d %H:%00:%s\") and DATE_FORMAT(?, \"%Y-%m-%d 23:59:59\") ' +
                'group by c.empresa_serv', [inicio, fin]);
            yield conne.end();
            // console.log(' ' + inicio + ' ' + fin + ' ' + reporte)
            return res.json(reporte[0]);
        });
    }
}
exports.reportecomisionesController = new ReporteComisionesController();
