import { Router } from 'express'

import { cajachicaController } from '../controllers/cajachica.controller'

// Modificacion 22/10/2021 ahora este es detalle caja chica
class CajaChicaRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/', cajachicaController.getCajaChica);

        this.router.post('/', cajachicaController.createCajaChica);

        this.router.get('/:fecha/:idusuario', cajachicaController.Obtener)

        this.router.delete('/:id', cajachicaController.Eliminar);

        this.router.put('/:id', cajachicaController.Actualizar);
    }


}

const cajachicaRoutes = new CajaChicaRoutes();

export default cajachicaRoutes.router;
