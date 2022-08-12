function arrAdder(arr) {
    let sentence = "";
    for(let i = 0; i < arr[0].length; i++){
      for(let j = 0; j < arr.length; j++){
        sentence+=arr[j][i];
      }
      sentence+=" ";
    }
    return sentence.trim();
  }