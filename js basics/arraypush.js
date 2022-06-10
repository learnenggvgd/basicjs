var array =["arr1","arr2","git"]

array.push("koo");
console.log(array);
array[array.length]="jooo";
console.log(array);
// array 1
for(let i of array){ //to get values from an array
    console.log(i);
}
for(let index in array){ //to get values from an array
    console.log(index);
}
console.log("length",array.length);

for(let index in array){ //to get values from an array
    console.log("\n",array[index]);
}

for(var m=0;m<array.length;m++){ //to get values from an array
    console.log("---------\t",array[m]);
}