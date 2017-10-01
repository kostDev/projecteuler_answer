const findSum = num =>{
	let value = 17;
	for(let i = 11; i < num; i++){
		let temp_floor = Math.floor(Math.sqrt(i));
		if(isPrime(i, temp_floor)) value+=i;
	}
	console.log('value: ' + value);
}
function isPrime(number, tempFloor) {
	for(let i = 2; i <= tempFloor; i++){
		if(number % i == 0) break;
		if(i == tempFloor) return true;
	}
	return false;
}
findSum(2000000);
