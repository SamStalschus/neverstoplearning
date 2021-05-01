const text1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(text1.match(/<(\w+)>.*<\/\1>/g)) //através do \1 eu consigo capturar o valor que foi capturado dentro do primeiro grupo
// -> [ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteudo</div>' ]

const text2 = 'Lentamente é mente muito lenta.'
console.log(text2.match(/(lenta)(mente).*\2.*\1/gi))
// -> [ 'Lentamente é mente muito lenta' ]
console.log(text2.match(/(?:lenta)(mente).*\1/gi))
// -> [ 'Lentamente é mente' ]

console.log(text2.match(/(lenta)(mente)/gi))
console.log(text2.match(/(lenta)(mente)?/gi))
console.log(text2.replace(/(lenta)(mente)/gi, '$2'))