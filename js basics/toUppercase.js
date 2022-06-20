// convert to display text in capital letters

var str = "hello";

//convert to array- array.from

// console.log(Array.from(str));
Array.from(str).map(char=>char.toUpperCase()).forEach(value=>console.log(value))

var val=str.toUpperCase();
console.log(val);

//print all vowels present in string(a,e,i,o,u)

var str1="hai hEllO";
var v=["a","e","i","o","u","A","E","I","O","U"];
// Array.from(str1).forEach(value=>console.log(value));
Array.from(str1).filter(char=>v.includes(char)).forEach(values=>console.log("\n resut=",values));



