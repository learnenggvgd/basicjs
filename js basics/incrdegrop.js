var a=20;
var b= 10;

if(a<b){
    console.log("a is big",a++);a
    console.log("a is big",++a);
}
else{
    console.log("-----postfix-----");
    console.log(" before b is big",b);
    console.log("b is big increment",b++);
    console.log("after b is big increment",b);
    console.log("--------------------------");
    b=10;
    console.log("-----prefix-----");
    console.log(" before b is big",b);
    console.log("b is big increment",++b);
    console.log("after b is big increment",b);
    console.log("--------------------------");
    var c =22;
    console.log("-----postfix-----");
    console.log(" before b is big",c);
    console.log("b is big increment",c--);
    console.log("after b is big increment",c);
    console.log("--------------------------");
    c=22;
    console.log("-----prefix-----");
    console.log(" before b is big",c);
    console.log("b is big increment",--c);
    console.log("after b is big increment",c);
}

// shorthand operations

var m=20;
var n=30;

// a+=b => a=a+b

console.log("m=",m);
console.log("n=",n);
console.log("------- a+= ------");
m+=n;
console.log("assigned to m=",m);
console.log("n=",n)
console.log("------- a-= ------");
console.log("m=",m);
console.log("n=",n);
m-=n;
console.log("assigned to m=",m);
console.log("n=",n)

// logical operator

var r=20;
var t= 10;

var h=9;
var k=7;

console.log("---------logical operator---------");
console.log("r="+r+",t="+t+",h="+h+",k="+k);
console.log("----------- && operator r>t&&h>k----------");
if(r>t&&h>k){
    console.log("and operator");
    console.log("success");
}

console.log("----------- && operator r>t&&h<k----------");
if(r>t&&h<k){
    console.log("and operator");
    console.log("success");
}
else{
    console.log("and operator");
    console.log("failed");
}

console.log("----------- || operator r>t||h<k----------");
if(r>t||h<k){
    console.log("and operator");
    console.log("success");
}
else{
    console.log("and operator");
    console.log("failed");
}

console.log("----------- || operator r>t||h>k----------");
if(r>t||h<k){
    console.log("and operator");
    console.log("success");
}
else{
    console.log("and operator");
    console.log("failed");
}

console.log("----------- || operator r==t||h==k----------");
if(r==t||h==k){
    console.log("and operator");
    console.log("success");
}
else{
    console.log("and operator");
    console.log("failed");
}