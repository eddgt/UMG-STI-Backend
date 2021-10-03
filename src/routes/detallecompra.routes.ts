import { Router } from 'express'

import { detalleCompraController } from '../controllers/detallecompra.controller'


class DetalleCompraRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {        

        this.router.get('/', detalleCompraController.getDetalleCompra);

        this.router.post('/', detalleCompraController.createDetalleCompra);

        this.router.get('/:id', detalleCompraController.Obtener)

        this.router.delete('/:id', detalleCompraController.Eliminar);

        this.router.put('/:id', detalleCompraController.Actualizar);
    }


}

const detalleCompraRoutes = new DetalleCompraRoutes();

export default detalleCompraRoutes.router;
