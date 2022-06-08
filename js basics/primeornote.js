// prime or not 2 3 5 7

var number = 17;
var i =2;
for(i;i<number;i++){
    if(number%i==0){
        console.log("prime number");
        break; 
    }
    if(number==i){
        console.log("not prime number");
    }
}