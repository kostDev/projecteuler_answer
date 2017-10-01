let findTriangleNumber = limitOfDivisors =>{
	let value = 0, number = 0, numberOfDivisors = 0;
	while(numberOfDivisors <= limitOfDivisors){
		numberOfDivisors = 0;
		value = (number * (number + 1)) / 2;
		for (let i = 1; i <= Math.sqrt(value); i++)
            if (value % i == 0) numberOfDivisors++;
        numberOfDivisors *= 2;
        ++number;
	}
	console.log(value);
}
findTriangleNumber(500);