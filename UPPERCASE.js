
const http = require('http')

const server = http.createServer(function(req,res){
	if(req.method != 'POST'){
	 	console.log('use POST method');
	}else{
		let body = '';
		req.on('data',chunk=>body+=chunk.toString())
		.on('end',()=>res.end(body.toUpperCase()));
	}
})

server.listen(Number(process.argv[2]))
