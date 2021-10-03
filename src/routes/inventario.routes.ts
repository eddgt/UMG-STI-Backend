import { Router } from 'express'

import { inventarioController } from '../controllers/inventario.controller'


class InventarioRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', inventarioController.getInventario);

        this.router.post('/', inventarioController.createInventario);

        this.router.get('/:id', inventarioController.Obtener)

        this.router.delete('/:id', inventarioController.Eliminar);

        this.router.put('/:id', inventarioController.Actualizar);
    }


}

const inventarioRoutes = new InventarioRoutes();

export default inventarioRoutes.router;
