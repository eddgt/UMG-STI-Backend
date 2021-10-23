import { Router } from 'express'

import { headercajachicaController } from '../controllers/headercajachica.controller'


class HeaderCajaChicaRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', headercajachicaController.getHeaderCajaChica);

        this.router.post('/', headercajachicaController.createCajaChica);

        this.router.get('/:fecha/:idusuario', headercajachicaController.Obtener)

        this.router.delete('/:id', headercajachicaController.Eliminar);

        this.router.put('/:id', headercajachicaController.Actualizar);
    }


}

const headercajachicaRoutes = new HeaderCajaChicaRoutes();

export default headercajachicaRoutes.router;
