function CodelandUsernameValidation(str) { 
  // code goes here  
  //principio de Jaimito el cartero
  if( str.length <4||str.length  >25) return false;
  if(str.charAt(str.length -1)=='_') return false;
  const expReg = RegExp('[a-zA-Z][0-9a-zA-Z_]+$');
  return expReg.test(str); 

}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));
