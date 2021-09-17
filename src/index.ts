import {App} from './app'

// logica de POO funcion main
// como liste es asincrono, se debe especificar de esa manera
async function main(){
    const app = new App(4000);
    await app.listen();
}

// se manda a ejecutar la funcion principal
main();