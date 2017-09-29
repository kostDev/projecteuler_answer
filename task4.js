var digitPalin = () =>{
	var temp = 0, num = 0;
	for(var i = 999; i > 99; i--){
		for(var e = 999; e > 99; e--){
			num = (e*i).toString();
			if(checkPolindrom(num)){
				temp < parseInt(num)? temp = num : null;
			}
		}
	}
	console.log(temp);
}

function checkPolindrom(pol) {
	let left = null, right = null;
	left = pol.slice(0,3);
	right = pol.slice(parseInt(pol.length / 2), pol.length);
	return left == right.split('').reverse().join('');
}
digitPalin();