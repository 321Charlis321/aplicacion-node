
const fs = require('fs');
const colors = require('colors/safe');

// const colors = require('colors');
// colors.setTheme({
//   silly: 'rainbow',
//   input: 'grey',
//   verbose: 'cyan',
//   prompt: 'grey',
//   info: 'green',
//   data: 'grey',
//   help: 'cyan',
//   warn: 'yellow',
//   blue: 'blue',
//   error: 'red'
// });


let crearLista = (base, limite=10) => {
  console.log('==============================='.red);
  console.log(` Tabla de multiplicar del ${base}`.green);
  console.log('==============================='.red);
  for (let i=0; i <= limite; i++) {

  // console.log( `${base}  * ${i} = ${base * i}`);
  console.log( `${colors.blue (base)} *  ${colors.blue(i)} = ${colors.blue(base * i )}` );
  // console.log( 'blue'.blue );

  // console.log(data);

     }


}


let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve , reject) => {
    if(!Number(base)){
      reject ( `el valor  introducido ${base} -al ${limite} no es un numero`);
      return;
    }
let data='';
    for (let i=0; i <= limite; i++) {
    data += `${base}  * ${i} = ${base * i}\n`;
    // console.log(data);

    }


    // const data = new Uint8Array(Buffer.from(data));
    fs.writeFile(`tablas/tabla del ${base} -al ${limite}.txt`, data, (err) => {
     if (err) reject(err)
     else
       resolve(`La Tabla del ${base} al ${limite}.txt `);


    });

  });
}

module.exports = {
  crearArchivo,
  crearLista
}
