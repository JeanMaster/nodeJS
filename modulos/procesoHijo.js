const { exec,spawn} = require('child_process');
//ls en linux mac, dir en windowns

// exec('ls -la', (err,stdout,sterr) => {
//     if (err) {
//         console.error(err);
//         return false
//     }

//     console.log(stdout)
// })

//ejecuta 

// exec('node modulos/consola.js', (err,stdout,sterr) => {
//     if (err) {
//         console.error(err);
//         return false
//     }

//     console.log(stdout)
// })


//spawn

let proceso = spawn('ls', ['-la']);

// console.log(proceso)
console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function(dato) {
    console.log('esta muerto')
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit' , () => {
    console.log('el proceso termino')
    console.log(proceso.killed)
})