
function effacer() 
{ 
    document.getElementById("output").value = "" 
} 
function calculer() 
{ 
  
    let b = eval( document.getElementById("output").value) 
    document.getElementById("output").value = b 
    
  

} 
function afficher(a) 
{ 
   
    var myString =  document.getElementById("output").value
    var lastChar = myString[myString.length - 1]
    if (myString.length < 18) {
     if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
        document.getElementById("output").value = myString + num
     }else if(num != lastChar){
        document.getElementById("output").value = myString.replace(lastChar, num)
     }
    }    
   
} 
function del() 
{ 
    var exp = document.getElementById("output").value
    document.getElementById("output").value = exp.substring(0,exp.length - 1);
    
   
} 
function afficher(num){
    
   }



