const text1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const text2 = 'There is a big fog in NYC'

// ? -> zero ou um
const regex = /fogo?/gi //a palavra fogo que pode ou não ter o caractere o
console.log(text1.match(regex))
// -> [ 'fogo', 'FOGO' ]
console.log(text2.match(regex))
// -> [ 'fog' ]

