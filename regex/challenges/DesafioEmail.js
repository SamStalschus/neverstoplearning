const text = `Os e-mails dos convidados são: 
	- fulano@cod3r.com.br
	- fulan_o@cod3r.com.br
	- ful.ano@cod3r.com.br
	- xico@gmail.com ...`

console.log(text.match(/\w{2,}@\w{2,8}\.\w{2,5}[\.\w{2,4}]?/g))
console.log(text.match(/[\w\.]+@\w+\.\w{2,4}\.?\w{0,6}\.?\w{0,6}/g))