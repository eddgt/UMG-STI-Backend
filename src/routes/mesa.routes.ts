import { Router } from 'express'

import { mesaController } from '../controllers/mesa.controller'


class MesaRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {
        // this.router.get('/',mesaController.post)

        this.router.get('/', mesaController.getMesa);

        this.router.post('/', mesaController.createMesa);

        this.router.get('/:id', mesaController.Obtener)

        this.router.delete('/:id', mesaController.Eliminar);

        this.router.put('/:id', mesaController.Actualizar);
    }


}

const mesaRoutes = new MesaRoutes();

export default mesaRoutes.router;
