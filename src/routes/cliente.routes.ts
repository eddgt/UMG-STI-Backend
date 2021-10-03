import { Router } from 'express'

import { clienteController } from '../controllers/cliente.controller'


class ClienteRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {        

        this.router.get('/', clienteController.getCliente);

        this.router.post('/', clienteController.createCliente);

        this.router.get('/:id', clienteController.Obtener)

        this.router.delete('/:id', clienteController.Eliminar);

        this.router.put('/:id', clienteController.Actualizar);
    }


}

const clienteRoutes = new ClienteRoutes();

export default clienteRoutes.router;
