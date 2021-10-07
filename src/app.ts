import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';

import indexRoutes from './routes/index.routes';
import clienteRoutes from './routes/cliente.routes';
import compraRoutes from './routes/compra.routes';
import deliveryRoutes from './routes/delivery.routes';
import mesaRoutes from './routes/mesa.routes';
import detalleCompraRoutes from './routes/detallecompra.routes';
import facturaRoutes from './routes/factura.routes';
import detallefacturaRoutes from './routes/detallefactura.routes';
import inventarioRoutes from './routes/inventario.routes';
import platoRoutes from './routes/plato.routes';
import tipopagoRoutes from './routes/tipopago.routes';
import usuarioRoutes from './routes/usuario.routes';
import empleadoRoutes from './routes/empleado.routes';


export class App {

    private app: Application

    //port ? puede ser tipo numero o string (union type) pueden recibir o no
    constructor(private port?: number | string) {

        this.app = express();
        this.app.use(cors);
        // add localhost to valid origins
        const allowedOrigins = ['http://localhost:4200'];

        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };

        // Then pass these options to cors:
        this.app.use(cors(options));

        this.settings()
        this.middlewares();
        this.routes();
    }

    // setea puerto en port
    settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/cliente', clienteRoutes);
        this.app.use('/compra', compraRoutes);
        this.app.use('/detallecompra', detalleCompraRoutes);
        this.app.use('/delivery', deliveryRoutes);
        this.app.use('/mesa', mesaRoutes);
        this.app.use('/factura', facturaRoutes);
        this.app.use('/detallefactura', detallefacturaRoutes);
        this.app.use('/inventario', inventarioRoutes);
        this.app.use('/plato', platoRoutes);
        this.app.use('/tipopago', tipopagoRoutes);
        this.app.use('/usuario', usuarioRoutes);
        this.app.use('/empleado', empleadoRoutes);
    }


    /*  asyn await se usa para decir que va tomar un tiempo para ejecutar
        luego de eso muestra el mensaje
    */
    async listen() {
        await this.app.listen(
            this.app.get('port')
        );
        // obtiene la propieda port
        console.log('Serve on port', this.app.get('port'))
    }

}