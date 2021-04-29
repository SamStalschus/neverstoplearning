// . é um coringa, válido para uma posição apenas

const text = '1,2,3,4,5,6,7,8,9,0'
console.log(text.match(/1.2/g))
// -> [ '1,2' ]
console.log(text.match(/1..2/g))
// -> null
console.log(text.match(/1..,/g))
// -> [ '1,2,' ]

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g))
// -> [ '8.3', '8.8' ]
console.log(notas.match(/.\../g))
// -> [ '8.3', '7.1', '8.8', '0.0' ]
