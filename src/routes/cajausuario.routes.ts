import { Router } from 'express'

import { cajachicaController } from '../controllers/cajachica.controller'

// Modificacion 22/10/2021 ahora este es detalle caja chica
class CajaChicaRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/:idusuario', cajachicaController.ObtenerCajaDelDiaPorUsuario)


    }


}

const cajachicaRoutes = new CajaChicaRoutes();

export default cajachicaRoutes.router;
