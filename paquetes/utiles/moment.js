const moment = require('moment')
//este modulo es para manejo de fechas m tiempo

let ahora = moment()

//fecha y hora de ya
console.log(ahora.toString())

console.log(ahora.format('YYYY/MM/DD - HH:mm'))