var arr1=[4,5,6];
var sum=0;
var sec=0;
for(let i in arr1){
    sum+=arr1[i];
}
console.log(sum);
for(let i in arr1){
    arr1[i]=sum-arr1[i]
}
console.log(arr1);