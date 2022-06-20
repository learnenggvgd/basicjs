// objects - realtime entity 
var a = [10,20,30];
console.log(typeof(a));

//create a object
// var object_name={key:value,key:value}

var a1={
    0:10,//key - value pair
    1:20,
    2:30
}
console.log(typeof(a));

// create an empolyee object having properties as id, name, designation, salary,experiance

var employee={
    id:143,
    name:"ashique m k",
    designation:"CEO",
    salary:300000,
    experiance:5
}

console.log(employee);
// to fetch particular value from object
// object_name["key"]
//object_name.key
console.log(employee.name+"="+employee["salary"]);
console.log(employee.designation);

//create a student object
var student={
    rollNo:143,
    name:"ashique m k",
    course:"CEO",
    totalMark:300000
}
console.log(student.name);

// to check whether a particular key is present or not in the object
// use in operator("in operator is return index value like array")

var student1={
    rollNo:143,
    name:"ashique m k",
    course:"CEO",
    totalMark:300000
}
console.log(student.name);

console.log("course" in student1);
console.log("salary" in student1);


// add /insert key-value pair to object

//object_name ["key"]=value

student1["gender"]="male";
student1.isVaccinated=true;
student1.vaccine="covisheild";

console.log(student1.gender);
console.log(student1);

//updaTE THE KEY - VALUE PAIR

student1.vaccine="CO-VAXIN";
console.log(student1);

//INCREMENT SALARY 5K
employee.salary+=5000;
console.log( employee.salary);


// PRINT KEY VALUE PAIR ONE-BY ONE
for(key in employee){
    console.log(`${key}:${employee[key]}`);
    console.log(`${key}:${employee.key}`);
}