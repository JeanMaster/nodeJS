//trabajando con console.time para ver cuanto tarda en ejecutarse el codigo y las funciones

console.time('todo listo')
let suma = 0
console.time('bucle')
for (let i = 0 ; i < 1000000000 ; i++) {
    suma += 1
}
console.timeEnd('bucle')


let suma2 = 0
console.time('bucle2')
for (let i = 0 ; i < 100000000 ; i++) {
    suma2 += 1
}
console.timeEnd('bucle2')
console.time('async')
console.log('comienza el proceso async')
asincrona()
    .then(() => {
            console.timeEnd('async')
    })


console.timeEnd('todo listo')

function asincrona () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('termino el poceso asincrono')
            resolve()
        },)
    })
}