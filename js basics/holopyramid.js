// for(var row=1;row<=4;row++){
//     str="";
//     for(var space=4;space>row;space--){
//         str+=""
//     }
//     for(var col=1;col<=row;col++){
//         str="*"
//     }
//     for(var ispace=1;ispace>)
// }
// for(var row =1;row<=4;row++){
//     var str=""
//     for(var space=5;space>row;space--){
//         if(space>=4){
//             str+=" "
//         }
//         else if(space==5){
//             str+="*"
//         }

//     }
//     for(var cstar=1;cstar<=row;cstar++){
//         str+="* "
//     }
//     console.log(str);
// }


for(var row=1;row<=4;row++){
    var str=""
    for(var space=1;space<=7;space++){ //row+col=5
        if(row==4 || space+row==5|| space-row==3){
            str+="*";
        }
        else{
            str+=" "
        }
    } 
    console.log(str);
}