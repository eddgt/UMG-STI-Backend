import { Router } from 'express'

import { detallefacturaController } from '../controllers/detallefactura.controller'


class DetalleFacturaRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', detallefacturaController.getDetalleFactura);

        this.router.post('/', detallefacturaController.createDetalleFactura);

        this.router.get('/:id', detallefacturaController.Obtener)        

        this.router.delete('/:id', detallefacturaController.Eliminar);

        this.router.put('/:id', detallefacturaController.Actualizar);
    }


}

const detallefacturaRoutes = new DetalleFacturaRoutes();

export default detallefacturaRoutes.router;
