
const output=document.getElementById("output");
function effacer() 
{ 
    output.value = "" 
} 
function calculer() 
{ 

    let b = eval( output.value) 
    output.value = b 
} 
function afficher(num) 
{ 
    var myString =  output.value
    var lastChar = myString[myString.length - 1]
    if (myString.length <= 18) {
        if(num=='.' && !canIAddDot()){
        return;   
    }
        else
        if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
           output.value = myString + num 
        }else{
            output.value = myString.replace(lastChar, num)
        }   
    }
} 
function del() 
{  
    var exp = output.value
    output.value = exp.substring(0,exp.length - 1);
 }

function canIAddDot()
{
    const regex=/(^\d+$)|(^(\d+\.{0,1}\d*)([*\-+\/]?(\d+\.?\d*))*[*\-+\/]\d+$)/gm;
    return output.value.match(regex);
}





