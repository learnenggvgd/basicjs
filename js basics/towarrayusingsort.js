var arr1=[10,11,12,20,30];
var arr2=[11,20,21,30,31];
count=0;
var p1=0;
var p2=0;
var star=0;
while(p1<arr1.length&&p2<arr2.length){
    if(arr1[p1]<arr2[p2]){
        p1++;
    }
    else if(arr1[p1]==arr2[p2]){
        console.log(`common numbers are = ${arr1[p1]}`);
        p1++;
        p2++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }
    else if(star==0){
        console.log("not found");
    }
    count++;
}

console.log("total itration= "+count);


