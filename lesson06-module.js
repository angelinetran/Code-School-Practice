var fs = require('fs');
var path = require('path');
var extArray = [];
var fileExt = "";

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (error, data){
    if (error) 
      return callback(error);
    for (var i = 0; i < data.length; i++){
      fileExt = path.extname(data[i]).replace ('.', '');
      if (fileExt === ext){
        extArray.push(data[i]);
      }
    }
    return callback(null, extArray);
  });   
}

/*
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*/


