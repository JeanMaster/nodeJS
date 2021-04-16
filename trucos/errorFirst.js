function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (e){ 
            callback(e)
        }
    }, 1000)
}


asincrona((err, dato) => {
    if (err) {
        console.error('tenemos un error')
        console.error(err)
        // throw err; //no va a funcionar en funciones async
        return false
    }

    console.log('todo fue bien, mi data es', dato)
    
})