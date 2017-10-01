var prm = () => {
	let temp = 600851475143 / 71,list = [71];
	for (var i = 72; i <= 10000000; i++) {
		if(temp % i == 0){
			temp /= i;
			list.push(i);
			console.log('i: '+i+' ===== temp: '+ temp);
			console.log(list);
		}else if(temp/i < 1) break;
	}
}
prm();