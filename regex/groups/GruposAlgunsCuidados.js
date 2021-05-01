const text = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(text.match(/[(abc)]/gi))
// -> [ '(', 'a', ')', 'A', 'B', 'C' ]
console.log(text.match(/([abc])/gi))
// -> [ 'a', 'A', 'B', 'C' ]
console.log(text.match(/(abc)/gi))
// -> [ 'ABC' ]
