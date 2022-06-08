
for(var row =1;row<=4;row++){
    var str=""
    for(var space=4;space>row;space--){
        str+=" "
    }
    for(var cstar=1;cstar<=row;cstar++){
        str+="* "
    }
    console.log(str);
}