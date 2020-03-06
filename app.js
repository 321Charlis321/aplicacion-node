
const argv = require('./config/yargs').argv;
const colors = require('colors');


             const {crearArchivo,crearLista} = require ('./multiplicar/multiplicar');
  let comando = argv._[0];
  // console.log(comando);


switch (comando) {

  case 'listar':


  crearLista(argv.base, argv.limite);


    break;

    case 'crear':

    crearArchivo(argv.base,argv.limite)
    .then(archivo => console.log(`Archivo creado:    ${archivo.green}`))
    .catch(e => console.log(e));

      break;
  default:
  console.log('Comando no reconocido');

}
// console.log(comando);

 // let base = '45';
 // let argv = process.argv;
 // let parametro = argv[2];
 // let base = parametro.split('=')[1];
// console.log('limite',argv.limite);
