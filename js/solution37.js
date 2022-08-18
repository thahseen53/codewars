function switcheroo(x){
    let str=[]
    for(let i=0; i< x.length ;i++){
      if(x[i]==='a'){
        str.push('b')
      }else if(x[i]==='b'){
        str.push('a')
      }else{
        str.push(x[i])
      }
    }
   return str.join('')
   }