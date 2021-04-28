function BracketMatcher(str) { 

    const stack = []                            //crear pila
  
    for (let i = 0; i < str.lenght;i++){        //for para toda la cadena

      if(str[i]==='('){                         //encontre un (?
        stack.push('(');                        //pa la pila
      }else if(str[i]=== ')'){                  //encontre un )?
        if(stack.length===0){                   //mi pila esta vacia?
          return 0;                             //esto esta mal
        }else{                                  //la pila no está vacia
          stack.pop();                          //quita un (
        }
      }
    }
    return stack.length === 0 ? 1:0;            //ya acabamos y la pila esta vacia?
  }
     
  // keep this function call here 
  console.log(BracketMatcher(readline()));