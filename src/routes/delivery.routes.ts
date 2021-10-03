import { Router } from 'express'

import { deliveryController } from '../controllers/delivery.controller'


class DeliveryRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {        

        this.router.get('/', deliveryController.getDelivery);

        this.router.post('/', deliveryController.createDelivery);

        this.router.get('/:id', deliveryController.Obtener)

        this.router.delete('/:id', deliveryController.Eliminar);

        this.router.put('/:id', deliveryController.Actualizar);
    }


}

const deliveryRoutes = new DeliveryRoutes();

export default deliveryRoutes.router;
