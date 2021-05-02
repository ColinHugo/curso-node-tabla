const fs = require( 'fs' );
let colors = require( 'colors' );

const crearArchivo = async ( base = 5, listar = false, hasta ) => {

    try {

        let salida = '';
        let consola = '';

        for ( let i = 1; i <= hasta; i++) {
            consola += ` ${ base } ${ 'x'.red } ${ i } ${ '='.red } ${ i * base }\n`;
            salida += ` ${ base } x ${ i } = ${ i * base }\n`;
        }

        if( listar ){
            console.log( '===================='.yellow );
            console.log( ' Tabla del: ', colors.bgBlack.white( base ) );
            console.log( '===================='.yellow )

            console.log( consola );
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        return `Tabla del ${ base }.txt creada`;
    }

    catch ( e ){
        throw e;
    }
}

module.exports = {
    crearArchivo
}