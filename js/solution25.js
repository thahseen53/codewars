function removeRotten(bagOfFruits){
    if(bagOfFruits){
     return bagOfFruits.map(fruits =>fruits.replace('rotten', '').toLowerCase());
    }else{
    return []
      }
  }