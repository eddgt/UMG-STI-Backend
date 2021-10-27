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

        const reporte = await conne.query('SELECT  f.id factura_id, DATE_FORMAT(f.date_fact, "%Y-%m-%d") fecha, d.empresa_serv canal, '+
        'sum(df.cantidad) cantidad, round(sum(df.precio), 2) total  from factura f '+
        'inner join delivery d on d.id = f.delivery_id '+
        'inner join fact_detalle df on df.factura_id = f.id '+
        'inner join plato p on p.id = df.plato_id '+
        'where f.date_fact between ? and ? '+
        'and f.status = "INACTIVA" '+
        'group by f.id, DATE_FORMAT(f.date_fact, "%Y-%m-%d"), d.empresa_serv', [inicio, fin]);
        await conne.end()

        // console.log(' ' + inicio + ' ' + fin + ' ' + reporte)
        return res.json(reporte[0]);
    }

    public async getReporteByFacturaId(req: Request, res: Response): Promise<Response> {

        const id_factura = parseInt(req.params.id);

        const conne = await connect();

        const reporte = await conne.query('select @i := @i + 1 as item_no, d.factura_id, p.descripcion, dl.empresa_serv medio, '+
        'case dl.empresa_serv  when \'MESA\' THEN m.referencem else \'\' end as mesa, '+
        'd.cantidad, d.precio '+
        'from fact_detalle d '+
        'inner join factura f on f.id = d.factura_id '+
        'inner join delivery dl on dl.id = f.delivery_id '+
        'inner join mesa m on m.id = f.mesa_id '+
        'inner join plato p on p.id = d.plato_id '+
        'cross join (select @i := 0) d '+
        'where factura_id = ? ', [id_factura]);
        await conne.end()
        
        return res.json(reporte[0]);
    }


}

export const reporteventasController = new ReporteVentasController();