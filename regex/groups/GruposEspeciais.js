const text = 'João é calmo, mas no transito fica nervoso.'

console.log(text.match(/[\wÀ-ú]+/gi))
// -> [
// ->   'João',  'é',
// ->   'calmo', 'mas',
// ->   'no',    'transito',
// ->   'fica',  'nervoso'
// -> ]

// Positive lookahead
console.log(text.match(/[\wÀ-ú]+(?=,)/gi)) // procure uma vírgula na frente da palavra que segue esse padrão
// -> [ 'calmo' ] -> Procure uma palavra que tem uma vírgula na frente
console.log(text.match(/[\wÀ-ú]+(?=\.)/gi)) // procure uma palavra que cumpra o conjunto e que tenha um . na frente
// -> [ 'nervoso' ]

// Negative lookahead
console.log(text.match(/[\wÀ-ú]+\b(?!,)/gi)) // palavras que não tem vírgula na frente

