const text = 'áéíóú àèìòù âêîôû ç ãõ ü'
console.log(text.match(/[Á-ü]/g)) // todo o conjunto de caracteres especiais que são usados na língua portuguesa
// -> [
// ->   'á', 'é', 'í', 'ó', 'ú',
// ->   'à', 'è', 'ì', 'ò', 'ù',
// ->   'â', 'ê', 'î', 'ô', 'û',
// ->   'ç', 'ã', 'õ', 'ü'
// -> ]