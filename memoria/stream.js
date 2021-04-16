const { transcode } = require('buffer');
const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = '';
//crea un stream de lectura
let readableStream = fs.createReadStream(__dirname + '/input.txt')
// readableStream.setEncoding('utf-8')
// readableStream.on('data' , function(chunk) {
//     data += chunk
// })

// readableStream.on('end', ()=> {
//     console.log(data)
// })


//creanmdo stream de escritura stdout ya es un buffer de escritura
// process.stdout.write("hola")
// process.stdout.write("que")
// process.stdout.write("tal")

// permite leer y escribir en strema

const Transfrom = stream.Transform;

function Mayus() {
    Transfrom.call(this)
}

util.inherits(Mayus, Transfrom) 

Mayus.prototype._transform = function(chunk , codif , cb) {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)