const text = `
ca	r
r	o s!
`

console.log(text.match(/ca\tr\nr\to\ss!/))
// ->	[
// ->	'ca\tr\nr\to s!',
// ->	index: 1,
// ->	input: '\nca\tr\nr\to s!\n',
// ->	groups: undefined
// ->  ]