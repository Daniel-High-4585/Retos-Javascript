function FirstFactorial(num) { 
      let n = 1;    
      for(var i = num; i >= 1; i--){
        n *= i;
      }
      return n;
}
   
// keep this function call here 
console.log(FirstFactorial(readline()));