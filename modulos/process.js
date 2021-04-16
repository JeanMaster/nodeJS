// const process = require('process') process tambien esta en los globales.

//captura errores no capturados con try catch
process.on('uncaughtException', (err, origen) => {
    console.error('vaya se nos olvido capturar un error')
    console.error(err)
})

process.on('beforeExit', () => {
    console.log('el proceso va a terminar')
})


setTimeout(() => {
    console.log('esto solo se va ver si se esta antes del exit, el exit cierra el evenloop')
}, 1000)


functionquenoexiste()

process.on('exit', () => {
    console.log('termino el proceso')
})
