const text = `
Lista Telefônica:
  - (21) 12345-6789
  - (11) 62300-2234
  - 56787-7711
  - (85)333-7890
  - (1) 4321-1234
`

console.log(text.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))