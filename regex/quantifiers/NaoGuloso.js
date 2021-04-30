const text = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores são gulosos por padrão (greeedy)...
console.log(text.match(/<div>.+<\/div>/g))
// -> [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(text.match(/<div>.*<\/div>/g))
// -> [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(text.match(/<div>.{0,100}<\/div>/g))
// -> [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]

// quantificadores não gulosos (lazy)...
console.log(text.match(/<div>.+?<\/div>/g))
// -> [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(text.match(/<div>.*?<\/div>/g))
// -> [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(text.match(/<div>.{0,100}?<\/div>/g))
// -> [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]

