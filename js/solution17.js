//codewars set alarm problem


function setAlarm(employed, vacation){
    return (employed && vacation || !employed && vacation || !employed && !vacation ? false : true);
   }