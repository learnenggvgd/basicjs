var sub = (num1,num2)=>{
    var res=num1-num2;
    return res;
}

 var result= sub(13,5);
 console.log(result);


 var even = num1=>{
    if(num1%2==0){
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

 var result= even(10);



 var validate =number=>{
    console.log(number);
    var x = (number.length)
    console.log(x);
    if((x)==10){
        console.log("valid");
    }else{
        console.log("not valid");
    }
   }
       
   var x=validate("9037994621");


   var check=value=>{
    console.log(value);
    var x=value.endsWith("@gmail.com");
    console.log(x);
    var r=value.startsWith("a");
    console.log(r);
    if(value.endsWith("@gmail.com")){
        console.log("valid");
    }
    else {
        console.log("not valid");
    }
}


check("ashiquemkm@gmail.com");
   
 