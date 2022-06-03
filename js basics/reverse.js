// reverse
var i =0;
var num =123;
var estr=""
while(num!==0){
    lastDigit=num%10;
    estr+=lastDigit;
    num=Math.floor(num/10)
}
console.log(typeof(estr));
console.log(estr);
var tonum=Number(estr);
console.log(tonum);
console.log(typeof(tonum));
