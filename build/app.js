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
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const cliente_routes_1 = __importDefault(require("./routes/cliente.routes"));
const compra_routes_1 = __importDefault(require("./routes/compra.routes"));
const delivery_routes_1 = __importDefault(require("./routes/delivery.routes"));
const mesa_routes_1 = __importDefault(require("./routes/mesa.routes"));
const detallecompra_routes_1 = __importDefault(require("./routes/detallecompra.routes"));
const factura_routes_1 = __importDefault(require("./routes/factura.routes"));
const detallefactura_routes_1 = __importDefault(require("./routes/detallefactura.routes"));
const inventario_routes_1 = __importDefault(require("./routes/inventario.routes"));
const plato_routes_1 = __importDefault(require("./routes/plato.routes"));
const tipopago_routes_1 = __importDefault(require("./routes/tipopago.routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const empleado_routes_1 = __importDefault(require("./routes/empleado.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const password_routes_1 = __importDefault(require("./routes/password.routes"));
const reporteventas_routes_1 = __importDefault(require("./routes/reporteventas.routes"));
const reportecomisiones_routes_1 = __importDefault(require("./routes/reportecomisiones.routes"));
const reporteinventario_routes_1 = __importDefault(require("./routes/reporteinventario.routes"));
const cajachica_routes_1 = __importDefault(require("./routes/cajachica.routes"));
class App {
    //port ? puede ser tipo numero o string (union type) pueden recibir o no
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        const options = {
            origin: '*'
        };
        // Then pass these options to cors:
        this.app.use((0, cors_1.default)(options));
        this.settings();
        this.middlewares();
        this.routes();
    }
    // setea puerto en port
    settings() {
        this.app.set('port', this.port || process.env.PORT || 4004);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/cliente', cliente_routes_1.default);
        this.app.use('/compra', compra_routes_1.default);
        this.app.use('/detallecompra', detallecompra_routes_1.default);
        this.app.use('/delivery', delivery_routes_1.default);
        this.app.use('/mesa', mesa_routes_1.default);
        this.app.use('/factura', factura_routes_1.default);
        this.app.use('/detallefactura', detallefactura_routes_1.default);
        this.app.use('/inventario', inventario_routes_1.default);
        this.app.use('/plato', plato_routes_1.default);
        this.app.use('/tipopago', tipopago_routes_1.default);
        this.app.use('/usuario', usuario_routes_1.default);
        this.app.use('/empleado', empleado_routes_1.default);
        this.app.use('/login', login_routes_1.default);
        this.app.use('/password', password_routes_1.default);
        this.app.use('/cajachica', cajachica_routes_1.default);
        this.app.use('/reporteventas', reporteventas_routes_1.default);
        this.app.use('/reportecomisiones', reportecomisiones_routes_1.default);
        this.app.use('/reporteinventario', reporteinventario_routes_1.default);
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
