const text = '1,2,3,a.b c!d?e[f'

console.log(text.match(/\D/g))
// -> [
// ->   ',', ',', ',', 'a',
// ->   '.', 'b', ' ', 'c',
// ->   '!', 'd', '?', 'e',
// ->   '[', 'f'
// -> ]
console.log(text.match(/[^0-9]/g))
// -> [
// ->   ',', ',', ',', 'a',
// ->   '.', 'b', ' ', 'c',
// ->   '!', 'd', '?', 'e',
// ->   '[', 'f'
// -> ]
console.log(text.match(/[^\d!\?\[\s,\.]/g))
// -> [ 'a', 'b', 'c', 'd', 'e', 'f' ]

const text2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(text2.match(/[^!-/:-@\s]/g)) //Embora não pareça, aqui tenho dois intervalos, do !-/ e do :-@
// -> [ '1', '2' ]