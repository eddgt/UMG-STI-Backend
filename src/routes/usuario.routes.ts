import { Router } from 'express'

import { usuarioController } from '../controllers/usuario.controller'


class UsuarioRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', usuarioController.getUsuario);

        this.router.post('/', usuarioController.createUsuario);

        this.router.get('/:id', usuarioController.Obtener)

        this.router.delete('/:id', usuarioController.Eliminar);

        this.router.put('/:id', usuarioController.Actualizar);
    }


}

const usuarioRoutes = new UsuarioRoutes();

export default usuarioRoutes.router;
