const fs = require('fs')

let leer = function(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString())
    })
}



let escribir = function(ruta,contenido,cb) {
    fs.writeFile(ruta, contenido, (err)=>{
        if (err) {
            console.log('no pude escribir', err)
        } else {
            console.log('se escribio correctamente')
        }
    })
}

let borrar = function(ruta, cb){
    fs.unlink(ruta, cb) 
}


// leer(`${__dirname}/archivo.txt`, console.log)

// escribir(`${__dirname}/archivo1.txt`, 'soy un archivo nuevo', console.log)

borrar(`${__dirname}/archivo1.txt`, console.log)