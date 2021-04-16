const os = require('os')

console.log("arquitectura del sistema")
console.log(os.arch())

console.log("revisa la plataforma")
console.log(os.platform())

console.log("tu cpu")
console.log(os.cpus())
console.log(os.cpus().length)
//errores y se;ales del sistema.
console.log(os.constants)

//memoria libre
const SIZE = 1024
const kb = bytes =>  bytes / SIZE 
const mb = bytes =>  kb(bytes) / SIZE 
const gb = bytes =>  mb(bytes) / SIZE 


console.log(os.freemem())
console.log(kb(os.freemem))
console.log(mb(os.freemem))
console.log(gb(os.freemem))
//total Mem
console.log(gb(os.totalmem))

//directorio raiz
console.log(os.homedir())
//carpeta de temporales
console.log(os.tmpdir())
//nombre de la pc en red
console.log(os.hostname())
//networkinterface
console.log(os.networkInterfaces())