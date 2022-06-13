var array1=[10,20,10,20,11,12];
var arrlimit=array1.length;
for(let limit in array1){
    for(let limit2 in array1){
        limit++;
        if(array1[limit]==array1[limit2]){
            console.log("the duplicate number are",array1[limit]);
        }
    }
}