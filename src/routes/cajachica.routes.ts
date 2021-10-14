import { Router } from 'express'

import { cajachicaController } from '../controllers/cajachica.controller'


class CajaChicaRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', cajachicaController.getCajaChica);

        this.router.post('/', cajachicaController.createCajaChica);

        this.router.get('/:id', cajachicaController.Obtener)

        this.router.delete('/:id', cajachicaController.Eliminar);

        this.router.put('/:id', cajachicaController.Actualizar);
    }


}

const cajachicaRoutes = new CajaChicaRoutes();

export default cajachicaRoutes.router;
