let fs = require('fs');
let path = require('path');

function filterfile(dir,ex,callback){
	fs.readdir(dir,function(err,file){
		if(err){
		return callback(err);
		}
		
		file = file.filter(function (file){
			return path.extname(file) === '.'+ex
			})
		callback(null,file);
	})
}

module.exports = filterfile;
