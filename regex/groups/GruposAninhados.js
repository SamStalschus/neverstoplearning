const text = 'supermercado hipermercado minimercado mercado'

//sem grupos aninhados
console.log(text.match(/(super|hiper|mini)?mercado/g))
// -> [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]

// com grupos aninhados
console.log(text.match(/((hi|su)per|mini)?mercado/g))
// -> [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]
