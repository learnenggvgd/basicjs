// filter ();-create a new array with elements satisfy the condition
//      given in the function

a=[10,11,12,13,14,15];
// print only even number

function numcheck(num){
    return num%2==0;
}

var evens =a.filter(numcheck)
console.log(evens);


// function with arrow function and filter in array a
console.log("------arrow with filter----------");
console.log(a.filter(num=>num%2==0));


// qua and asn

// print numbers numbers > 12
console.log("------arrow with filter number >12----------");
console.log(a.filter(num=>num>12));


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

console.log("------arrow with filter employee with developer ----------");
console.log(employee.filter(emp=>emp[2]=="developer"));

console.log("------arrow with filter employee with salary ----------");
console.log(employee.filter(emp=>emp[4]>30000));