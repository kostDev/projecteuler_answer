const BigNumber = require('big-number');
let result = new BigNumber(2).pow(1000).number.reduce((sum, cur) => sum + cur,0);
console.log(result);
