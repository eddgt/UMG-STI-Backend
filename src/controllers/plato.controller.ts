import { json, Request, Response } from 'express';

import { connect } from '../database';

import { Plato } from '../interface/plato.interface';

class PlatoController {

    public plato(req: Request, res: Response) {
        res.json({
            message: 'Plato is start'
        });
    }

    public async getPlato(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const plato = await conne.query('SELECT p.id, p.receta_id, p.descripcion, sum(i.cantidad) cantidad, p.costo, p.margen, p.precio, '+
        'p.categoria, p.id_rol, p.fecha_ven, p.estado FROM plato p '+
        'INNER JOIN inventario i on i.plato_id = p.id '+
        'where p.categoria not in("PLATO") '+
        'GROUP BY p.id '+
        'UNION ALL '+
        'SELECT id, receta_id, descripcion, cantidad, costo, margen, precio, '+
        'categoria, id_rol, fecha_ven, estado FROM plato where categoria in("PLATO") ');
        await conne.end()

        return res.json(plato[0]);
    }

    public async createplato(req: Request, res: Response): Promise<Response> {
        try {
            const newPlato: Plato = req.body;
            //console.log(newPlato);

            const conne = await connect();
            const result = await conne.query('INSERT INTO plato SET ?', [newPlato]);
            console.log("Creando Plato: " + JSON.stringify(newPlato));
            const conn2 = await connect();
            const result2 = await conn2.query('INSERT INTO inventario (plato_id, producto, cantidad, precio_unit, movimiento, motivo_ajuste, fecha_movimiento) ' +
            ' values(?, ?, ?, ?, ?, ?, SYSDATE()) ', [result[0].insertId, newPlato.descripcion, 0, 0, 'CREACION INICIAL','CREACION INICIAL']);
            console.log("Creando Inventario: " + result[0].insertId);
            console.log("Result 2: " + result2);
            await conne.end()
            await conn2.end()

            return res.json({
                message: 'Plato creado',
                id: result[0].insertId
            });

        } catch (error) {
            return res.json({
                message: error
            });
        }

    }

    public async Obtener(req: Request, res: Response): Promise<Response> {

        const id_plato = req.params.id;

        const conne = await connect();

        const plato = await conne.query('SELECT * FROM plato WHERE id = ? AND estado="ACTIVO" ', [id_plato]);
        await conne.end()

        return res.json(plato[0]);
    }

    public async ObtenerPlatosPorCategoria(req: Request, res: Response): Promise<Response> {

        const categoria = req.params.categoria;

        const conne = await connect();

        const plato = await conne.query('SELECT * FROM plato WHERE categoria = ? and estado="ACTIVO" ', [categoria]);
        await conne.end()

        return res.json(plato[0]);
    }

    public async ObtenerPlatosPorRol(req: Request, res: Response): Promise<Response> {

        const id_rol = req.params.rol;

        const conne = await connect();

        const plato = await conne.query('SELECT * FROM plato WHERE id_rol = ? and estado ="ACTIVO" ', [id_rol]);
        await conne.end()

        return res.json(plato[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response> {

        try {
            const id_delete = req.params.id;
            const conne = await connect();

            await conne.query('UPDATE plato SET estado = "INACTIVO" WHERE id = ? ', [id_delete]);
            await conne.end()

            return res.json({
                message: 'Plato eliminado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }


    }

    public async Actualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id_plato = req.params.id;
            const update: Plato = req.body;

            const conne = await connect();

            await conne.query('UPDATE plato set ? WHERE id = ?', [update, id_plato])
            await conne.end()

            return res.json({
                message: 'Plato actualizado'
            })
        } catch (error) {
            return res.json({
                message: error
            });
        }

    }
}

export const platoController = new PlatoController();

