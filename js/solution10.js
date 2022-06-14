function stairsIn20(s){
    let stairs = 0;
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s[i].length; j++) {
        stairs += s[i][j];
      }
    }
    return stairs * 20;
  }