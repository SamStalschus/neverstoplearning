const text1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const text2 = 'There is a big fog in NYC'

// * -> zero ou mais
const regex = /fogo*/gi
console.log(text1.match(regex))
// -> [ 'fogo', 'FOGOOOOOO' ]
console.log(text2.match(regex))
// -> [ 'fog' ]

