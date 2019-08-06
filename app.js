//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');
// .command('listar', 'Imprime en consola la tabla de multiplicar', {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// })
// .command('crear', 'Genera tabla de multiplicar', {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// })
// .help()
// .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(base);
// console.log('base', argv.base);
// console.log('limite', argv.limite);