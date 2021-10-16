import { Router } from 'express'

import { totalmesaController } from '../controllers/totalmesa.controller'


class TotalMesaRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {        

        this.router.get('/', totalmesaController.getTotalMesa);

        this.router.post('/', totalmesaController.createTotalMesa);

        this.router.get('/:idm/:idf', totalmesaController.Obtener)

        this.router.delete('/:id', totalmesaController.Eliminar);

        this.router.put('/:id', totalmesaController.Actualizar);
    }


}

const totalmesaRoutes = new TotalMesaRoutes();

export default totalmesaRoutes.router;
