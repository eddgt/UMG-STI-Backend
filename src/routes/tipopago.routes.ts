import { Router } from 'express'

import { tipopagoController } from '../controllers/tipopago.controller'


class TipoPagoRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', tipopagoController.getTipoPago);

        this.router.post('/', tipopagoController.createTipoPago);

        this.router.get('/:id', tipopagoController.Obtener)

        this.router.delete('/:id', tipopagoController.Eliminar);

        this.router.put('/:id', tipopagoController.Actualizar);
    }


}

const tipopagoRoutes = new TipoPagoRoutes();

export default tipopagoRoutes.router;
