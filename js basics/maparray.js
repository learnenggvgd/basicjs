// create a new array by calling function for array element

var a=[10,11,12,13,14,15]
// print square all the element in the givern array
console.log(a);
function square(num){
    return num**2;
}

var squares=a.map(square);
console.log(squares);

console.log("---------using arrow function-------");

console.log(a.map(num=>num**2));

console.log("-------- 2 -using arrow function-------");
var get=a.map(num=>num**2);
console.log(get);


console.log("------------------cube(n*n*n)--------------------");
// print cube of all the element in the given array

var get=a.map(num=>num**3);
console.log(get);

var get=a.map(num=>Math.pow(num,3));
console.log(get);



//output is a new array 
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

console.log(employee.map(emp=>emp[1]));

var array=[1,2,3,4,5,6,7];
// create an array with element, if number>5 then number+1 else do number-1
// outpt [1=0,2=1,3=2,4=3,5=4,6=7,7=8]
console.log("------------------using  function--------------------");

console.log(a);
function calcu(num){
    if(num>5){
        return num+1;
    }
    else{
        return num-1;
    }
}

var squares=array.map(calcu);
console.log(squares);

console.log("------------------using arrow function--------------------");

console.log(array.map(num=>num>5?num+1:num-1));