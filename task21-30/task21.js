let divSum = 0, tmpDiv = 0, allSum = 0;
for(let i = 1; i < 10000; i++){
	divSum = 0;
	tmpDiv = 0;
	for(let n = 1; n < i;n++){
		i % n == 0 ? divSum+=n : null;
		if(n+1 == i){
			for(let d = 1; d < divSum;d++){
				divSum % d == 0 ? tmpDiv+=d : null;
				if(d+1 == divSum && n+1 == tmpDiv && divSum != tmpDiv){
					allSum += divSum;
					console.log(divSum, tmpDiv);
				} 
			}
		}
	}
}

console.log('answer:',allSum);