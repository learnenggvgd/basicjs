var pattern= "ABCBBC";
var word=pattern.split("");
console.log(word);
var object={};
count=1;
word.map(word=>word in object?object[word]+=1:object[word]=1)
for(let word in object){
    if(word in object){
        if(object[word]>1){
            console.log(word)
        }
        
    }
}

var out={};
for(let char of pattern){
    if(char in out){
        console.log(`first recursive charecter ${char}`);
        break;
    }else{
        out[char]=1;
    }
}