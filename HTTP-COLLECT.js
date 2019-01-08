const http = require('http')

http.get(process.argv[2], function (response) {
  	data='';
	response.on('data',(chunk)=>data+=chunk)
	response.on('end',()=>{
	console.log(data.toString().length)
	console.log(data.toString())
	})
})
