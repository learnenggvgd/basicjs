// ternary operator
// condition?1st statement:2nd statement

var a =19;

a>=18?console.log("eligible"):console.log("not eligible");

a>=18?
console.log("eligible"):
console.log("not eligible");

var num = 0;

a<0?
console.log("positive"):
console.log("negative");

// so that
console.log("----------------------------");

var num2 = 0;

if(num2==0)
{
    console.log("0");
}
else if(num2>0){
    console.log("positive");
}else{
    console.log("negative");
}

// ternary

// a==0?console.log("0"): a>0? console.log("positive"): console.log("negative")

no1 = 2;
no2 = 2;

if(no1==no2)
{
    console.log("equal");
}
else if(no1>no2){
    console.log("no1 is large");
}else{
    console.log("no2 is large");
}

no1==no2? console.log("equal"):no1>no2?console.log("no1 is large"):console.log("no2 is large")