function otraFuncion() {
     serompe()
}

function serompe() {
    a= 3 +z
}

function seRompeAsincrona(cb){
    setTimeout(() => {
        try {

            return 3 + z
        } catch(err) {
            console.error("error en mi funcion asincrona, hay que meter el try catch en la funcion" , err)
            cb(err)
        }
    })
}

try {
    // otraFuncion();
    seRompeAsincrona(function() {
        console.log("hay error")
    });
} catch(err) {
    console.error('vaya algo se rompio')
    console.log(err)
    console.log('no pasa nada lo capturamos')
}

console.log('el codigo sigue funcionando con el try catch que captura el error')