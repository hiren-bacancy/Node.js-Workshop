const http = require('http');

http.get(process.argv[2],(responce)=>{
	responce.setEncoding('utf8')	
	responce.on('data',console.log)
	responce.on('error',console.error)
}).on('error',console.error)
