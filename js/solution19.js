
//return vowel count of string

function getCount(str) {
    let vowelsCount= 0
    const vowels =['a','e','i','o','u']
   for(let s of str){
     if(vowels.includes(s)){
       vowelsCount++
     }
   }
   return vowelsCount;
 }