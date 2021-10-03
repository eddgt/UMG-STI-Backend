import { Router } from 'express'

import { facturaController } from '../controllers/factura.controller'


class FacturaRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', facturaController.getFactura);

        this.router.post('/', facturaController.createFactura);

        this.router.get('/:id', facturaController.Obtener)

        this.router.delete('/:id', facturaController.Eliminar);

        this.router.put('/:id', facturaController.Actualizar);
    }


}

const facturaRoutes = new FacturaRoutes();

export default facturaRoutes.router;
