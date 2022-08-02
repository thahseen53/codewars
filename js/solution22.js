function highAndLow(numbers){
    const num = numbers.split(" ").map(s=>Number(s))
    return `${Math.max(...num)} ${Math.min(...num)}`
  }