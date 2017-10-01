const fs = require('fs')
const digits = fs.readFileSync('./files/digits8.txt', 'utf8');

let findBigNum = arr =>{
	let value = 1, count = 0, temp_arr = [], limit = 3000000000;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == 0){
			value = 1;
			count = 0;
			continue;
		}else if(arr[i] == ',') continue;
		count++;
		value *= parseInt(arr[i]);
		if(count == 13){
			if(value > limit) temp_arr.push(value); 
			value = 1;
			count = 0;
			i -=12;
		}
	}
	console.log(temp_arr.sort());
}
findBigNum(digits.split('\r\n').toString());


