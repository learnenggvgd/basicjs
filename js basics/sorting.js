var arr=[2,3,4,5]
var pairSum=9;
var counter=0;
var star=0;
var low=0;
var up=arr.length-1;
while(low<up){
    var curSum=arr[low]+arr[up];
    if(curSum==pairSum){
        star=1;
        console.log(`pairs are = ${arr[low]},${arr[up]}`);
        break;
    }
    else if()
}
