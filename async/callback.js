const hola = function( nombre, micallback) {
    setTimeout(() => {
        console.log(`hola, ${nombre}`)
        micallback(nombre)
    },1000)
}

const adios = function( nombre, otroCallback) {
    setTimeout(() => {
        console.log(`adios, ${nombre}`)
        otroCallback()
    },1000)
}



console.log("iniciando proceso...")

hola('carlos', (nombre)=> {
    adios(nombre, () => {
        console.log("finalizando proceso...")
    })
})
