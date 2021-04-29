// . ? * + - ^ $ | [ ] { } ( ) \ :

// usando o scape \
const text = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
console.log(text.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(text.split(regexSimbolos))