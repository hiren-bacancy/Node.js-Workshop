let fs  = require('fs');
function lines(){
	fs.readFile(process.argv[2],function(err,file){
	if(err) console.log(err.message);
        else	console.log(file.toString().split('\n').length-1);
});
}

lines();
