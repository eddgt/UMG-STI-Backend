import { Router } from 'express'

import { platoController } from '../controllers/plato.controller'


class PlatoRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', platoController.getPlato);

        this.router.post('/', platoController.createplato);

        this.router.get('/:id', platoController.Obtener)

        this.router.delete('/:id', platoController.Eliminar);

        this.router.put('/:id', platoController.Actualizar);
    }


}

const platoRoutes = new PlatoRoutes();

export default platoRoutes.router;
