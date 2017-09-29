const fs = require('fs');
const arr = fs.readFileSync('digits11.txt','utf8');
const limit = 20; // from task
const findProduct = () =>{
	let goodArr = giveMeGoodArr(arr.split(',').toString());

	let leftRightBigNumber = findBiggestProductFromLeftToRight(goodArr);
	console.log(leftRightBigNumber);
	let UpDownBigNumber = findBiggestProductFromUpToDown(goodArr);
	console.log(UpDownBigNumber);
	let diagonallyBigNumber = findBiggestProductFromDiagonally(goodArr);
	console.log(diagonallyBigNumber);
}

function giveMeGoodArr(arr) {
	let tempValue = '', tempI = 0, proArr = [];;
	for(let y = 0; y < limit; y++){
		proArr[y] = [];
		for(let x = 0; x < limit; x++){
			if(!isNaN(parseInt(arr[tempI])) && tempI != arr.length){
				proArr[y][x] = parseInt(arr[tempI] + '' + arr[++tempI]);
				tempI+=2;
			}
			else if(isNaN(parseInt(arr[tempI])) && tempI != arr.length){
				++tempI;
				if(isNaN(parseInt(arr[tempI]))) ++tempI;
				proArr[y][x] = parseInt(arr[tempI] + '' + arr[++tempI]);
				tempI+=2;
			}
		}
	}
	return proArr;
}
function findBiggestProductFromLeftToRight(arr){
	let tempValue = 0;
	for(let y = 0; y < limit; y++){
		for(let x = 0; x < limit-3; x++){ // -3 elements
			let temp = arr[y][x] * arr[y][x+1] * arr[y][x+2] * arr[y][x+3];
			temp > tempValue ? tempValue = temp : null;
		}
	}
	return tempValue;
}
function findBiggestProductFromUpToDown(arr){
	let tempValue = 0;
	for(let x = 0; x < limit; x++){
		for(let y = 0; y < limit-3; y++){ // -3 elements
			let temp = arr[y][x] * arr[y+1][x] * arr[y+2][x] * arr[y+3][x];
			temp > tempValue ? tempValue = temp : null;
		}
	}
	return tempValue;
}
function findBiggestProductFromDiagonally(arr){
	let tempValue = 0, gCounter = 1;
	for(let y = 0; y < limit-3; y++){
		for(let x = 0; x < limit-3; x++){
			let temp = arr[y][x]  * arr[y+1][x+1] * arr[y+2][x+2] * arr[y+3][x+3];
			temp > tempValue ? tempValue = temp : null;
		}
	}
	for(let y = 0; y < limit - 3; y++){
		for(let x = 19; x >= 0; x--){
			let temp = arr[y][x]  * arr[y+1][x-1] * arr[y+2][x-2] * arr[y+3][x-3];
			temp > tempValue ? tempValue = temp : null;
		}
	}
	while(gCounter < 17){
		for(let y = gCounter, x = 0; y < limit-3 && x < limit-3; y++, x++){
			let temp = arr[y][x]  * arr[y+1][x+1] * arr[y+2][x+2] * arr[y+3][x+3];
			let temp2 = arr[x][y]  * arr[x+1][y+1] * arr[x+2][y+2] * arr[x+3][y+3];
			if(temp2 > temp) temp2 > tempValue ? tempValue = temp2 : null;
			else temp > tempValue ? tempValue = temp : null;
		}
		++gCounter;
	}
	return tempValue;
}
findProduct();