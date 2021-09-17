import express, { Application } from 'express';
import morgan from 'morgan';

import indexRoutes from './routes/index.routes';
// import postRoutes from './routes/post.routes';
import clienteRoutes from './routes/cliente.routes';
import compraRoutes from './routes/compra.routes';
import deliveryRoutes from './routes/delivery.routes';

export class App {

    private app: Application

    //port ? puede ser tipo numero o string (union type) pueden recibir o no
    constructor(private port?: number | string) {

        this.app = express();
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
        // this.app.use('/post', postRoutes);
        this.app.use('/cliente', clienteRoutes);
        this.app.use('/compra', compraRoutes);
        this.app.use('/delivery', deliveryRoutes);
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