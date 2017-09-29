var sum = (maxNumber) => {
	let value = null;
	for(let i = 0; i < maxNumber; i++)
		i%3 == 0 || i%5 == 0? value+=i : null; 
	console.log("sum: "+ value);
}
sum(1000);