const text = '.$+*?-'
console.log(text.match(/[+.?*$]/g))
// -> [ '.', '$', '+', '*', '?' ]
console.log(text.match(/[+.?*$]./g)) // esses meta-caracteres não precisam de um escape para funcionar como literal em um conjunto
// -> [ '.$', '+*', '?-' ]
console.log(text.match(/[$-?]/g)) // isso é um iontervalo válido de meta-caracteres
// -> [ '.', '$', '+', '*', '?', '-' ]

//NÃO é um intervalo
console.log(text.match(/[$\-?]/g))
console.log(text.match(/[-?]/g))



// Pode precisar de um escape dentro do conjunto: - [ ] *
