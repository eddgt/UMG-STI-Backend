import { Router } from 'express'

import { empleadoController } from '../controllers/empleado.controller'


class EmpleadoRoutes {

    public router = Router();

    constructor() {
        this.config();
    }


    config(): void {        

        this.router.get('/', empleadoController.getEmpleado);

        this.router.post('/', empleadoController.createEmpleado);

        this.router.get('/:id', empleadoController.Obtener)

        this.router.delete('/:id', empleadoController.Eliminar);

        this.router.put('/:id', empleadoController.Actualizar);
    }


}

const empleadoRoutes = new EmpleadoRoutes();

export default empleadoRoutes.router;
