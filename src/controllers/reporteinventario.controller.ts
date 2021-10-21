import { Request, Response } from 'express';

import { connect } from '../database';

// import { ReporteVentas } from '../interface/reporteventas.interface';

class ReporteInventarioController {

    public reporteinventario(req: Request, res: Response) {
        res.json({
            message: 'Reporte inventario is start'
        });
    }


    public async getReporte(req: Request, res: Response): Promise<Response> {

        // const inicio = req.body.desde;
        // const fin = req.body.hasta;

        const conne = await connect();

        /* const reporte = await conne.query('select id CODIGO, producto DESCRIPCION, ' +
        'SUM(entrada-salida) SALDO from inventario ' +
        'group by id, producto ', [inicio, fin]);
        await conne.end() */

        const reporte = await conne.query('select i.plato_id codigo, i.producto descripcion, ' +
            'p.categoria, sum(i.cantidad) saldo ' +
            'from inventario i ' +
            'inner join plato p on p.id = i.plato_id ' +
            'and p.categoria not like "PLATO" ' +
            'GROUP BY i.plato_id, i.producto, p.categoria ');
        await conne.end()

        // console.log(' ' + inicio + ' ' + fin + ' ' + reporte)
        return res.json(reporte[0]);
    }


}

export const repinventarioController = new ReporteInventarioController();