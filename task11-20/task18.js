const fs = require('fs');
const obj = fs.readFileSync('../files/task18.txt', 'utf8').split('\r\n');
const pro = [];

let bigNum = (n1,n2) => { if(n1 > n2) return n1; else return n2;}

let findMaxSum = () =>{

	obj.reverse().reduce((s,el)=>{
		pro.push(el.split(' ').map(parseFloat));
	},0);

	for(let i = 1; i < pro.length; i++){
		for(let n = 0; n < pro[i].length; n++){
			pro[i][n] = bigNum(pro[i][n] + pro[i-1][n], pro[i][n] + pro[i-1][n+1]);
		}
	}
	console.log('answer:', pro[pro.length-1]);
}
findMaxSum();