// create a object for car whose properties are {name,model,manufacture,price}

var car={
    name:"dizire",
    model:"sedan",
    manufacture:"maruthi",
    price:"800000"
}
// display manufacture of the car
console.log(car["manufacture"]);

//check whether model is present or not
if("model" in car){
    console.log(car["model"]);
}else{
    console.log("model is not present");
}
//add properties varient
car["varient"]=["manual"];
console.log(car);
//add propertiey color
car["color"]=["red","blue","green"];
console.log(car);

//add propertiey more 
car['varient'].push('automatic');
console.log(car);


// "hello hai hello hai"
// print word count from the given text
//output{hello:2,hai:2}

var text="hello hai hello hai";
var word=text.split(" ");
console.log(word);
var object={};
count=1;
// for(let i of word){
//     if(i in object){
//         object[i]+=1;
//     }else{
//         object[i]=1;
//     }
// }
// console.log(object);

word.map(word=>word in object?object[word]+=1:object[word]=1)
console.log(object);

// pattern= "ABABBC"
// FIND FIRST RECURSIVE(REPEETED) CHARECTER FROM THE GIVEN PATTERN

var a = [10,10,20,20,30,30,40,40,50,50,50];

var object={};
a.map(num=>num in object?object[num]+=1:object[num]=1)
console.log(object);

distdata=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

var output={}

for(let data of distdata){
    // data is the each object values from distdata
    let distName=data['district'];
    let curTemp=data['weather'];
    if(distName in output){
        let oldTemp=output[distName]
        if(curTemp>oldTemp){
            output[distName]=curTemp;
        }
    }
    else{
        output[distName]=curTemp;
    }
}
console.log(output);

//sort the given output in descending order of temperature
// object to array conversion - object.entries(object_name);
console.log(Object.entries(output));