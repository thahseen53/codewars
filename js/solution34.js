async function execute(action, nTimes){
    for(let i = 0; i < nTimes-1; i++){
      action();
    }
    await action();
}