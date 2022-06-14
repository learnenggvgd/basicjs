// // nested array

// a=[
//     [1,2],
//     [10,22],
//     [14,21],
//     [3,6],
//     [5,9],
//     [19,28]
// ]

// for(let subArray of a){
// //    console.log(subArray);
//    for(let num of subArray){
//     if(num<10){
//         console.log(num);
//     }
// }
// }

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

for(let emp of employee){
    console.log(emp[1]);
}

console.log("employees count"+employee.length);

for(let emp of employee){
    if(emp[2]=="developer"){
        console.log(emp);
    }
}
console.log("-------------");
for(let emp of employee){
    if(emp[4]>30000){
        console.log(emp);
    }
}

console.log("-------name------");
for(let emp of employee){
    if(emp[1]=="Laisha"){
        console.log(emp);
    }
}
console.log("---------desenting order-------");

employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee);

console.log("---------assenting order-------");

employee.sort((emp1,emp2)=>emp1[4]-emp2[4])
console.log(employee);