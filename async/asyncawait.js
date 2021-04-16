const hola = async function( nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`hola, ${nombre}`)
            resolve(nombre)
        },1000)    
    })
}

const adios = async function(nombre) {
   return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`adios, ${nombre}`)
            resolve()
            reject("hay un error")
        },1000)    
   })
}    

const hablar = async function(nombre ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log("blablabla")
                resolve(nombre)
                reject("hay un error")
        }, 1000)
    })
}


async function main() {
   let nombre = await hola('carlos')
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log('termianmos')
}
console.log('comenzando')
main()
console.log('va ser la segunda instruccion')