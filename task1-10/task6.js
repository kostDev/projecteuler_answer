let squDif = () =>{
	let value1 = 0, value2 = 0;
	for(var n = 1; n <= 100; n++){
			value1 += n*n;
			value2 += n;
			if(n == 100) value2 *= value2; 
	}
	console.log(value2 - value1);
}
squDif();