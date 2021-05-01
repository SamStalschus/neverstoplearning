const text = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(text.match(/\n/g))
// -> [ '\n', '\n', '\n', '\n' ]
console.log(text.match(/^(\w).+\1$/gi))
// -> null
console.log(text.match(/^(\w).+\1$/gim))
// -> [
// ->   'Leo é muito legal',
// ->   'Emanuel foi jogar em Sergipe',
// ->   'Bianca é casada com Habib'
// -> ]