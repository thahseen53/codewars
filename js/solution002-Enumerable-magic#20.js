function eachCons(array, n) {
    const res =[]
    for(let i=0;i<=array.length-n; i++ ){
      res.push(array.slice(i,i+n))
    }
    return res;
  }