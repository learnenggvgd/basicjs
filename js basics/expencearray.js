var expence = [12000,20000,34000,25000,10000,17000]

// total expence
// maximum expence
// minimum expence
var total = 0;
for(let i in expence){
    total+=expence[i];
}
console.log("total",total);

var maximum = 0;
for(let i in expence){
    if(maximum<expence[i]){
        maximum=expence[i];
    }
}
console.log("max",maximum);

var minimum = expence[0];
for(let i of expence){
    if(minimum>i){ //12k 12k  t 12k>20k f
        minimum=i;
    }
}
console.log("min=",minimum);

