

function squareDigits(num){
    return parseInt(num.toString().split('').map(x => parseInt(x)).map(x => x * x).join(''))
  }