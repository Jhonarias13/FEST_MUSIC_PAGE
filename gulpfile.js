/*
//  require => importa de la carpeta node_modules Gulp
const { series, parallel } = require('gulp');
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

// parallel => ejecuta las funciones en paralelo
exports.default = parallel(sass, js, minificarHTML); //   Default => se ejecuta solo usando GUlp en la consola y lo hace de manera secuencial
*/


const { series, src, dest, watch } = require('gulp'); //   en llaves sigfinica que tiene multiple funciones
const sass = require('gulp-dart-sass'); //    solo tiene una funcion, no necesita las llaves
const imagemin = require('gulp-imagemin');


//  funcion para expandir CSS
function css() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}


//  funcion para comprimir css
function minificarcss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

// funcion wacth

function watchArchivos() {
    watch('src/scss/**/*.scss', css); // primer parametro => escucha la primera funcion
    // segundo parametro => donde se va a guardar la compilacion

    // un * => busca de manera local en la misma carpeta contenedora
    // **/* => busca de manera global en otras carpetas dentro de la carpeta contenendora                                                                                               
}

//tareas o exports
exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;