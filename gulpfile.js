//  require => importa de la carpeta node_modules Gulp
const { series } = require('gulp');
//  { series } => permite ejecutar una funcion y luego otra

function sass(done) {
    console.log('compilando SASS...');

    done(); //  establece un principio y un final de la ejecucion de la funcion
    //  se debe declarar tanto en el parametro de la funcion como al final de la misma
}

function js(done) {
    console.log('compilando javascript...');

    done();
}

function minificarHTML(done) {
    console.log('Minificando...');

    done();

}

// exports => permite ejectuar funciones desde la consola mediante el comando "gulp"
exports.sass = sass;
exports.js = js;
exports.tareas = series(sass, js); //   permite ejectuar de manera secuencial las funciones
exports.default = series(sass, js, minificarHTML); //   Default => se ejecuta solo usando GUlp en la consola y lo hace de manera secuencial