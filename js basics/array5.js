//   binary search 
// sorted array
//  sort()-to use sort array

var arr=[10,14,1,2,3,15];
console.log("before sorting",arr);
arr.sort(((n1,n2)=>n1-n2));//1,2,3,10,14,15
console.log("after sorting",arr);
// binarry search tree
// 1.find middle position
//2.search number in left side
// 3. search number in right side
// 4.number at middle
var num=2;
var low=0;
var up=arr.length
var statu=0;
var count=0;
while(low<=up){
    count++;
    mid=Math.floor((low+up)/2)
    if(num>arr[mid]){
        low=mid+1;
    }
    else if(num>=arr[mid]){
        up=mid;
    }
    else if(num==arr[mid]){
        statu=1;
        break;
    }
}
console.log("total count = ",count);
console.log(statu==1?"number found":"number not found");