const hola = function( nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`hola, ${nombre}`)
            resolve(nombre)
        },1000)    
    })
}

const adios = function(nombre) {
   return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`adios, ${nombre}`)
            resolve()
            reject("hay un error")
        },1000)    
   })
}    

const hablar = function(nombre , ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log("blablabla")
                // resolve(nombre)
                reject("hay un error")
        }, 1000)
    })
}

console.log("comenzando procesos")

hola('carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log("terminando Procesos")
    })
    .catch(err =>{
       console.error('error: ')
       console.error(err)
    })