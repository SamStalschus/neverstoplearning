// Flags

// g - global
// i - ignore case

const texto = 'Carlos assinou o atestado médico.'
console.log(texto.match(/C|at/)) // procure letra C ou letra ab -> encontra apenas a letra C sem a flag -g
console.log(texto.match(/c|at/i)) // procure letra c ou letra ab ignorando case sensitive -> encontra a letra C
console.log(texto.match(/c|at/gi)) // procure letra c ou letra ab ignorando case sensitive e de maneira global