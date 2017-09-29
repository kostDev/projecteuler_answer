var mult = () =>{
	let counter = 2;
	for(var n = 20; n < 1000000000; n+=20){
		while(counter <= 20){
			if(n % counter == 0) counter++;
			else break;
			if(counter == 20){
				console.log(n);
				break;
			}
		}
		counter = 2;
	}
}
mult();