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

        const reporte = await conne.query('SELECT c.empresa_serv empresa, ' +
        'round(sum(c.costo_delivery),2) total ' +
        'FROM factura a ' +
        'INNER JOIN delivery c on c.id = a.delivery_id ' +
        'WHERE a.date_fact between DATE_FORMAT(?, \"%Y-%m-%d %00:%00:%00\") and DATE_FORMAT(?, \"%Y-%m-%d 23:59:59\") ' +
        'AND c.empresa_serv not in("MESA") ' +
        'group by c.empresa_serv', [inicio, fin]);
        await conne.end()

        // console.log(' ' + inicio + ' ' + fin + ' ' + reporte)
        return res.json(reporte[0]);
    }


}

export const reportecomisionesController = new ReporteComisionesController();