opnClsB=[];

arrOpn=['(','[','{'];
arrCls=[')',']','}'];
function bracesValid(str){
    for(i=0;i<str.length;i++){
        if(arrOpn.includes(str[i])){
            opnClsB.push(str[i]);
        
        }
        else if(arrCls.includes(str[i])){

            if(str[i]=='}' && opnClsB[opnClsB.length-1]=='{'){  
                opnClsB.pop()}
            else if(str[i]==')' && opnClsB[opnClsB.length-1]=='('){

                opnClsB.pop()}
            else if(str[i]==']' && opnClsB[opnClsB.length-1]=='['){

                opnClsB.pop()}
        } 
    
    
    }
    
    if (opnClsB.length==0){return true;}
    else{return false;}

}
if (bracesValid("{[}]")){
    console.log("Success")

}
else{console.log("False")}