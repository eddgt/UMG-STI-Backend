"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
// import postRoutes from './routes/post.routes';
const cliente_routes_1 = __importDefault(require("./routes/cliente.routes"));
const compra_routes_1 = __importDefault(require("./routes/compra.routes"));
const delivery_routes_1 = __importDefault(require("./routes/delivery.routes"));
class App {
    //port ? puede ser tipo numero o string (union type) pueden recibir o no
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    // setea puerto en port
    settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        // this.app.use('/post', postRoutes);
        this.app.use('/cliente', cliente_routes_1.default);
        this.app.use('/compra', compra_routes_1.default);
        this.app.use('/delivery', delivery_routes_1.default);
    }
    /*  asyn await se usa para decir que va tomar un tiempo para ejecutar
        luego de eso muestra el mensaje
    */
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            // obtiene la propieda port
            console.log('Serve on port', this.app.get('port'));
        });
    }
}
exports.App = App;
