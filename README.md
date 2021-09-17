# REST API TYPESCRIPT, NODEJS, EXPRESS

### Inicar con el proyecto de nodejs
- npm init -y

### Instalacion del modulo typescript
- npm i typescript -D (-D es por ser una modulo de desarrollo)
- npx typescript --init (es para crear un archivo de configuracion tsconfig.json)

### Instalacion de express 
express es un modulo de node que nos permite crear un servidor de manera sencilla
- npm i express 
- npm i @types/express -D
- 

### Configuracion del archivo tsconfig.json

abrimos el archivo tsconfig.json y buscamos la propiedad que es "target" y verificamos que tenga es6
luego de eso buscamos la opcion comentada "outdir" la descomentamos, esta opcion 
es para decirle a ts donde alojar el codigo convertido y en su propieda le asignamos lo siguiente "./build"

### Instalacion de Nodemon
instalar nodemon que nos permite automatizar la convesion de ts a js
- npm i nodemon -D

luego de eso procedemos a escribir en el archivo package.json 2 scripts para automatizar el proceso 
- "build": "tsc -w",
- "dev": "nodemon build/index.js"


### Instalacion de un middleware 
instalaremos lo que es morgan para poder visualizar las peticiones
que hagamos al servidor 
- npm i morgan
- npm i @types/morgan -D
