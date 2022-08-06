function min(arr, toReturn) {
    // TODO
    //if toReturn = value return smallest value
    if(toReturn === 'value'){
      const min = Math.min(...arr)
      return min
    }
    //if toReturn = index return index of smallest value
    
    if(toReturn === 'index'){
      const min = Math.min(...arr)
      return arr.indexOf(min)
    }
  }