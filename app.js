const { crearArchivo } = require( './helpers/multiplicar.js' );
let colors = require( 'colors' );
const argv = require( './config/yargs.js' );

console.clear();

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base ] = arg3.split( '=')
// console.log( 'base', base );

// const base = 1;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow ) )
    .catch( err => console.log( err ) );