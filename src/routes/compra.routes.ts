import { Router } from 'express'

import { compraController } from '../controllers/compra.controller'


class CompraRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {
        // this.router.get('/',compraController.post)

        this.router.get('/', compraController.getCompra);

        this.router.post('/', compraController.createCompra);

        this.router.get('/:id', compraController.Obtener)

        this.router.delete('/:id', compraController.Eliminar);

        this.router.put('/:id', compraController.Actualizar);
    }


}

const compraRoutes = new CompraRoutes();

export default compraRoutes.router;
