const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 20
  }

}
const argv = require('yargs')
            .command('listar','Ejecute comandos De multiplicar',opts)
            .command('crear','Ejecute comandos De multiplicar',opts)
            .help()
            .argv;

module.exports = {
  argv 
}
