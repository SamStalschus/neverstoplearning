const text = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

// para definir um quantificador usa { }
console.log(text.match(/\d{1,2}/g)) // do grupo dos dígitos pegue os que tem 1 ou 2 caracteres (como ele é guloso ele sempre prioriza pegar 2)
// -> [
// ->   '12', '0',  '6',
// ->   '9',  '21', '23',
// ->   '45', '46'
// -> ]
console.log(text.match(/[0-9]{2}/g))// de 0-9 pegue os que tem dois dígitos
// -> [ '12', '21', '23', '45', '46' ]
console.log(text.match(/\d{1,}/g)) // do grupo dos dígitos pode pegar um ou mais números (como é guloso pega o máximo)
// -> [
// ->   '120', '6',
// ->   '9',   '21',
// ->   '23',  '45',
// ->   '46'
// -> ]

console.log(text.match(/\w{7}/g))// grupos de caracteres que tenham exatamente 7 dígitos (não pegou milhões pois o õ não está contido no shorthand \w)
// -> [ 'recebeu', 'apostan' ]
console.log(text.match(/[\wõ]{7,}/g))// 7 ou mais caracteres do grupo de caracteres incluindo o õ
// -> [ 'recebeu', 'milhões', 'apostando' ]

