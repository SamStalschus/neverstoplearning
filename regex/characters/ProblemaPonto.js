const text = 'Bom\ndia'
console.log(text.match(/./g))
// -> [ 'B', 'o', 'm', 'd', 'i', 'a' ]
console.log(text.match(/.../g))
// -> [ 'Bom', 'dia' ]
console.log(text.match(/..../g))
// -> null