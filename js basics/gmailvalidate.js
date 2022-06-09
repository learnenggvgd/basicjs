function check(value){
    console.log(value);
    var x=value.endsWith("@gmail.com");
    var r=value.startsWith("a");
    console.log(r);
    console.log(x);
    if(value.endsWith("@gmail.com")){
        console.log("valid");
    }
    else {
        console.log("not valid");
    }
}


check("ashiquemkm@gmail.com");