import { Request, Response } from 'express';

import { connect } from '../database';

// import { ReporteVentas } from '../interface/reporteventas.interface';

class ReporteComisionesController {

    public reportecomisiones(req: Request, res: Response) {
        res.json({
            message: 'Reporte comisiones is start'
        });
    }


    public async getReportePorFecha(req: Request, res: Response): Promise<Response> {

        const inicio = req.body.desde;
        const fin = req.body.hasta;

        const conne = await connect();

        const reporte = await conne.query('SELECT DATE_FORMAT(a.date_fact, "%Y-%m-%d") fecha, '+
        'a.delivery_id canal, c.descripcion producto, sum(b.cantidad) cantidad, round(sum(c.precio),2) total '+
        'FROM factura a '+
        'inner join fact_detalle b on a.id = b.factura_id '+
        'inner join plato c on c.id = b.plato_id '+
        'where a.date_fact between ? and ? '+
        ' group by a.date_fact, b.cantidad, c.descripcion, c.precio, a.delivery_id', [inicio, fin]);

        // console.log(' ' + inicio + ' ' + fin + ' ' + reporte)
        return res.json(reporte[0]);
    }


}

export const reportecomisionesController = new ReporteComisionesController();