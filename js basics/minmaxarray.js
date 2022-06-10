var arr=[10,20,1,2,3,15]
var prsent=2;
for(let i of arr){
    if(prsent==i){ //12k 12k  t 12k>20k f
        console.log("present on=", i);
    }
}

var arr=[10,20,1,2,3,15]
var prsent=2;
for(let i in arr){
    if(prsent==arr[i]){ //12k 12k  t 12k>20k f
        console.log("present on index =",i);
    }
}

var arr=[10,20,1,2,3,15]
var prsent=2;
var statu=0;
for(let i in arr){
    statu=1;
}
if(statu==1){ //12k 12k  t 12k>20k f
    console.log("present");
}else{
    console.log("not present");
}

console.log(statu==1?"number found":"number not founs");