const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(text.match(/r/gi))
// -> [ 'R', 'r', 'r', 'r', 'r' ]
console.log(text.match(/^r/gi)) // ^ -> início de linha ou string
// -> [ 'R' ]
console.log(text.match(/r$/gi)) // $ -> final de linha ou string
// -> [ 'r' ]
console.log(text.match(/^r.*r$/gi)) // comece com r e termine com r (aqui temos o problema do . não resolver \n)