const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'


console.log(text.match(/^r.*r$/gi)) // comece com r e termine com r (aqui temos o problema do . não resolver \n)
// -> null
console.log(text.match(/^r[\s\S]*r$/gi))
// -> [
// ->   'Romário era um excelente jogador\n, mas hoje é um político questionador'
// -> ]