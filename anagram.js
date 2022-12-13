const anagram = (str1, str2) => {
    str1= str1.toLowerCase();
    str2= str2.toLowerCase();
    
  
    let strChar1= str1.split('').filter(el => el !== ' ').sort();
   
    let strChar2= str2.split('').filter(el => el !== ' ').sort();
  
    const result1 = strChar1.join('');
    const result2 = strChar2.join('');

  
    
if (result1 === result2){
      return true; 
    } else {
        return false;
        }

  
};
console.log (anagram('Hello','Hello'));
module.exports = anagram;