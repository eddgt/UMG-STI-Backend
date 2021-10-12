import { Request, Response } from 'express';

import { connect } from '../database';

// import { ReporteVentas } from '../interface/reporteventas.interface';

class ReporteVentasController {

    public reporteventas(req: Request, res: Response) {
        res.json({
            message: 'Reporte ventas is start'
        });
    }


    public async getReportePorFecha(req: Request, res: Response): Promise<Response> {

        const inicio = req.body.desde;
        const fin = req.body.hasta;

        const conne = await connect();

        const reporte = await conne.query('SELECT a.mesa_id mesa, ' +
            'b.cantidad, a.delivery_id delivery, ' +
            'a.date_fact fecha , b.precio_id ' +
            'FROM factura a ' +
            'inner join fact_detalle b on a.id = b.factura_id ' +
            'where a.date_fact between ? and ? ' +
            'order by 1', [inicio, fin]);

        console.log(' ' + inicio + ' ' + fin + ' ' + reporte)
        return res.json(reporte[0]);
    }


}

export const reporteventasController = new ReporteVentasController();