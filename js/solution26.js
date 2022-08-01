function printerError(s) {
    let error = 0;
    for (let i = 0; i < s.length; i++){
      if (s[i] > 'm'){
        error++;
      }
    } return `${error}/${s.length}`;
  }