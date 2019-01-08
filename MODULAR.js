const filterfl = require('./MODULAR-FILTER.js');

const dir = process.argv[2];
const ex = process.argv[3];

filterfl(dir,ex,function(err,file){
	if(err){
	return console.error(error.message);
	}

	file.forEach((file)=>console.log(file))
})
