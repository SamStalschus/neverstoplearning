const text = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGRande1234545


#OpA1?
Foi123!
`
// letra maiuscula minuscula e simbolo, no mínimo 6 char e no max 20

console.log(text.match(/^.{6,20}$/gm))
console.log(text.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(text.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))