// console.log(global)
// console.log(setInterval)


// let i = 0;
// let intervalo = setInterval(() =>{
//     if (i ===3) {
//         clearInterval(intervalo)
//     }
//     console.log("hola")
//     i++
// })

// setImmediate(() => {
//     console.log("ejecuta en este momento")
// })

console.log(__dirname , __filename)

global.miVariable = "el valor que yo quiera"
console.log(miVariable)