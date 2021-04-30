const text = `Lista telefônica:
	- (11) 98756-1212
	-98765-4321 ...`

console.log(text.match(/[\(\d.\)\s]*\d{5}-\d{4}/g))