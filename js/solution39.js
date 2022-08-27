function abbrevName(name){
 
    const arr = name.split(' ').map(n => n.toUpperCase())
    return arr[0].charAt(0)+'.'+arr[1].charAt(0)
  
  }