const text = `Os e-mails dos convidados são: 
	- fulano@cod3r.com.br
	- xico@gmail.com ...`

console.log(text.match(/\w{2,}@\w{2,8}\.\w{2,5}[\.\w{2,4}]?/g))