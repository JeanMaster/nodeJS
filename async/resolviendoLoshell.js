console.log("iniciando proceso...")

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

const hablar = function(callbakcHablar) {
    setTimeout(() => {
        console.log("blablabla")
        callbakcHablar()
    }, 1000)
}

const conversacion = function(nombre,veces,callback) {
    if (veces > 0) {
       hablar(function () {
           conversacion(nombre, --veces, callback )
       })  
    } else {
        adios(nombre, callback)
    }
}    


hola('carlos', function(nombre) {
    conversacion(nombre, 3, function(){
        console.log("THE END")
    })
})








// hola('carlos', (nombre)=> {
//     hablar( () => {
//         hablar(() => {
//             hablar(() =>{
//                 adios(nombre, () => {
//                     console.log("finalizando proceso...")
//                 })
//             })
//         })
//    })
// })


