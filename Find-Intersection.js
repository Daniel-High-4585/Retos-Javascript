function FindIntersection(strArr) { 

    const lists = strArr.map(str => str.split(", "))
    const firstList = lists[0];
    const secondList = lists[1];
  
    let matchMap = {};
    let resultArr = [];
  
    firstList.forEach( num=> matchMap[num] = true)
  
    secondList.forEach(num => {
      if(matchMap[num]){
        resultArr.push(num);
      }
    })
  
    if(resultArr.length>0){
      return resultArr.join(",")
    }
    return false; 
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));