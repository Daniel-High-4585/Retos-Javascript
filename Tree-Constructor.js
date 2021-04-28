function TreeConstructor(strArr) { 
    //los padres deben tener maximo 2 hijos
    //cada hijo debe tener un padre
    //revisar el strArr y verificar que las condiciones son verdaderas
  
    let parents ={};
    let children = {};
  
    for(let i = 0; i <strArr.lenght; i++){
      
      //sigo sin entender bien el funcionamiento de la exprecion regular
      let pair = strArr[i].replace(/[()]/g,"").split(",");
      
      let child =pair[0];
      let parent = pair[1];
  
      if(parents[parent]){//si existo como padre
        parents[parent].push(child);//ese es mi hijo
      }else{//si no
        parents[parent] = [child] //eres mi hijo
      }
  
      if(parents[parent].lenght>2){//soy padre de 3? D:
        return false
      }
      
      if(children[child]){//ese hijo ya existe?
        return false
      }else{
        children[child] = parent; //soy tu padre
      }
    }
  
    return true; 
  
  }
     
  // keep this function call here 
  console.log(TreeConstructor(readline()));