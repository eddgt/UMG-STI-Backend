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

        const reporte = await conne.query('SELECT DATE_FORMAT(f.date_fact, "%Y-%m-%d") fecha, d.empresa_serv canal, '+
        'sum(fd.cantidad) cantidad, round(sum(fd.precio),2) ctotal  from factura f '+
        'inner join delivery d on d.id = f.delivery_id '+
        'inner join fact_detalle fd on fd.factura_id = f.id '+
        'where f.date_fact between ? and ? '+
        'group by DATE_FORMAT(f.date_fact, "%Y-%m-%d"),  d.empresa_serv ', [inicio, fin]);
        await conne.end()

        // console.log(' ' + inicio + ' ' + fin + ' ' + reporte)
        return res.json(reporte[0]);
    }


}

export const reporteventasController = new ReporteVentasController();