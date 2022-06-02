var num=90;

if(num==0){
    console.log("0 not possible,try another number");
}
else if(num%15==0){
    console.log("fizzbuzz");
} 
else if(num%5==0){
    console.log("buzz");
} 
else if(num%3==0){
    console.log("fizz");
} 
else{
    console.log("noting to print");
}