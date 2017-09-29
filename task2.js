var fib = (MaxNumber) => {
	var value = null;
	var prev = 1, temp = 0;
	for(let i = 2; i <= MaxNumber;){
		i%2 == 0 ? value+=i : null;
		temp = prev;
		prev = i;
		i = temp + prev;
	}
	console.log('sum: '+ value);
}
fib(4000000);