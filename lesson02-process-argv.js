var args = process.argv;
var sum = 0;

for (var i = 2; i < args.length; i++) {
	sum += +args[i];
}

console.log(sum);


/*

official solution
=================

var result = 0
    
for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

console.log(result)

*/