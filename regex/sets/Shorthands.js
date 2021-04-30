const text = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

console.log(text.match(/\d/g)) // números
console.log(text.match(/\D/g))

console.log(text.match(/\w/g))
console.log(text.match(/\W/g))

console.log(text.match(/\s/g))

console.log(text.match(/\S/g))
