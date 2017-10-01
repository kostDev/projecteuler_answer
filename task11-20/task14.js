let limit = 1e6, number = 14, countTerms = 1, temp = 0,
     high = {count: 0, number: 0};
let even = n => n / 2;
let odd  = n => 3 * n + 1;
console.time('code time');
for( ; number <= limit; number++){
    temp = number;
    while(temp != 1){
        temp % 2 == 0 ? temp = even(temp) : temp = odd(temp);
        ++countTerms;
    }
    if(countTerms > high.count){
        high.count = countTerms;
        high.number = number;
    }
    countTerms = 1;
}
console.timeEnd('code time');
console.log(high);
