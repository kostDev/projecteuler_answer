const fs = require('fs');
const arr = fs.readFileSync('../files/task20.txt', 'utf8').slice('\n');
let findFactorialSum = num =>{
	let temp = 0;
	for(let n = 0; n < arr.length; n++)	temp += (1 * arr[n]);
	console.log(temp);
}
findFactorialSum(100);