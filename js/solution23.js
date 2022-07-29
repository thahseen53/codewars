function getSumOfDigits(integer) {
    let sum = 0;
    while(integer!=0){
      sum= sum+integer % 10
      integer=parseInt(integer/10)
    }
    return sum
  }