let divisorsSum = 0, tempDivisors = 0, allSum = 0;
for(let i = 1; i < 10000; i++){
	divisorsSum = 0;
	tempDivisors = 0;
	for(let n = 1; n < i;n++){
		if( i % n == 0)	divisorsSum+=n;
		if(n+1 == i){
			for(let d = 1; d < divisorsSum;d++){
				if(divisorsSum % d == 0) tempDivisors+=d;
				if(d+1 == divisorsSum && n+1 == tempDivisors && divisorsSum != tempDivisors){
					allSum += divisorsSum;
					console.log(divisorsSum, tempDivisors);
				} 
			}
		}
	}

}
console.log('answer:',allSum);