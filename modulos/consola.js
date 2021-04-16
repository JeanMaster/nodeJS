console.log('algo')
console.info('hace lo mismo')
console.error('para errores')
console.warn('para warning, posible errores')
console.table('muestra dato en tablas')

var tabla = [
    {
        a:1 ,
        b: 'z',
    },
    {
        a:2,
        b:'otra z',
    }
]

console.log(tabla)
console.table(tabla)

console.group('conver')
    console.log('algo')
    console.info('hace lo mismo')
    console.error('para errores')
    console.warn('para warning, posible errores')
    console.table('muestra dato en tablas')
    console.group('table')
        console.log(tabla)
        console.table(tabla)
    console.groupEnd('table')
console.groupEnd('conver')

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')

console.countReset('veces')
console.count('veces')