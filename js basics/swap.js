console.log("first -------------");
var a=10;
var b=20;

console.log("before swapping a="+a+" b="+b);

var temp=a;
a=b;
b=temp;

console.log("after swapping a="+a+" b="+b);


console.log("second -------------");

// using 2 variable

var a=10;
var b=20;

console.log("before swapping a="+a+" b="+b);

a=a+b;
b=a-b;
a=a-b;


console.log("aafter swapping a="+a+" b="+b);
