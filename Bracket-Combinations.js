function BracketCombinations(num) { 
    // Un sujeto hizo una busqueda para resolver esto
    //y descubrio quehay una formula para calcular este
    //tipo de problemas 
    //la formula es ==> (2n!) / (n+1)! n!
    //https://es.wikipedia.org/wiki/Números_de_Catalan

    // Primero calculamos el factorial
    let factorial = (n) => {
      let k = 1;    
      for(var i = n; i >= 1; i--){
        k *= i;
      }
      return k;
    }
    
    // aplicamos la formula de Catalan
    const result = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
    return result; 
  }
     
  // keep this function call here 
  console.log(BracketCombinations(readline()));