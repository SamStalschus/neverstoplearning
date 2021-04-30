const text = 'ABC [abc] a-c 1234'

console.log(text.match(/[a-c]/g))
// -> [ 'a', 'b', 'c', 'a', 'c' ]
console.log(text.match(/a-c/g))
// -> [ 'a-c' ]

console.log(text.match(/[A-z]/g))
// -> [
// ->   'A', 'B', 'C', '[',
// ->   'a', 'b', 'c', ']',
// ->   'a', 'c'
// -> ]

// Os intervalos devem respeitar a ordem da tabela unicode, se a ordem for invertida pode dar algum problema
//console.log(text.match(/[a-Z]/g)) -> comentado pois retorna uma exceção 
