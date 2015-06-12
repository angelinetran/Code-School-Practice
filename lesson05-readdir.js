var fs = require('fs');
var path = require('path');
var files = process.argv[2];
var ext = process.argv[3];

fs.readdir(files, function (error, files){
	for (var i = 0; i < files.length; i++){
		fileExt = path.extname(files[i]).replace ('.', '');
		if (fileExt === ext){
			console.log(files[i]);
		}
	}
});


/*

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})

*/