const files = require('./files')

const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor};"><b>$1</b></span>`)

const texto = files.read('codigoFonte.html')


const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codeRegex)[0]

// String
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// Palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|static|class|if|else)\b/g, 'd857cf')

// Tipos...
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')


// comentários múltiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// comentário de uma linha
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')


const conteudoFinal = texto.replace(codeRegex, codigo)

files.write('codigoFonte.html', conteudoFinal)