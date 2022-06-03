// 123 amstrong = 1*3 5*3 3*3 sum = num 123=123 (amstrong)
// 15 amstron 1*2 5*2 sum = num 15=23 (not amstron)

// var input = 153;
// var total = 0;
// var mod = 0;
// var pow=0;
// var ninput=input;
// while(ninput!=0){
//     mod=ninput%10;
//     pow=mod**3;
//     ninput= parseInt(ninput/10);
//     console.log(pow);
// }


var input = 129;
var num = input;
var string = String(input);
var sum = 0;
while(num!=0){
    lastDigit=num%10;
    sum+=lastDigit**3;
    num=parseInt(num/10);
}
console.log(sum)
if(input==sum){
    console.log("amstrong");
}else{
    console.log("not amstrong");
}