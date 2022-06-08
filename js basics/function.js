function add(num1,num2,num3){
    console.log("inside fun");
    var c =num1-num2;
    var v=Math.abs(c);//math. function
    console.log(v);
    return v;
}

var x =add(7,9);
console.log(x);

// function sub(num1,num2){
//     if(num1>num2){
//         let c = num1-num2
//         return c;
//     }
//     else{
//         let c = num2-num1;
//         return c;
//     }
// }
// var x =sub(57,50);
// console.log(x);