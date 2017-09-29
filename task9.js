let pytTrip = () =>{
	let status = false;
	for(let a = 0; a < 1000/3; a++){
		for(let b = 0; b < 1000/2; b++){
			let c = 1000 - a - b;
			if(a*a + b*b == c*c){
				console.log('a: '+a + ' | b: '+ b + ' | c: '+c);
				console.log('value: '+ a * b * c);
				status = true;
				break;
			}	
		}
		if(status) break;
	}
}
pytTrip();