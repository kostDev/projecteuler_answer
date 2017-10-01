const fs  = require('fs');
const arr = fs.readFileSync('../files/digits13.txt','utf8').split('\r\n');
let result = (arr.reduce((result,current)=>{ return  result + ( 1 * current)},0) / 1e+42).toFixed();
console.log(result);
