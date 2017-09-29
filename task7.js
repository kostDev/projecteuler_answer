let primeNumPosition = () =>{
	let count = 6, sizeCounter = 0;
	for(let i = 14; i <= 1000000000; i++){
		for(let n = 2; n <= i; n++){
			if(i % n == 0) sizeCounter++;
			if(sizeCounter > 1) break;
			if(n == i) count++; 
		}
		sizeCounter = 0;
		if(count == 10001){
			console.log('i: '+ i + ' || count: '+ count);
			break;
		}
	}
	console.log(count);
}

primeNumPosition();