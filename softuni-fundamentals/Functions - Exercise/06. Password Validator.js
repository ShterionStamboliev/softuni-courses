function validator(password) {
  function length(string) {
      if ((string.length >= 6 && string.length <= 10)) {
          return true;
      } else {
          return false;
      }
  }
  function chars(string) {
      for (let char of string) {
          let charCode = char.charCodeAt();
          if (!(charCode >= 48 && charCode <= 57) && 
          !(charCode >= 65 && charCode <= 90) && 
          !(charCode >= 97 && charCode <= 122)){
              return false;
          } 
     } return true;
  }
  function nums(string) {
      let counter = 0;
      for (let num of string) {
          let charCode = num.charCodeAt();
          if(charCode >= 48 && charCode <= 57){
              counter++;
          } 
      }
      return counter >= 2; 
  }
  let isLengthValid = length(password);
  let doesItContainLettersAndNums = chars(password);
  let hasAtLeastTwoNums = nums(password);
  if (isLengthValid && doesItContainLettersAndNums && hasAtLeastTwoNums){
      console.log('Password is valid');
  } else {
      if (!isLengthValid){
          console.log('Password must be between 6 and 10 characters');
      } 
      if(!doesItContainLettersAndNums) {
          console.log('Password must consist only of letters and digits');
      }
      if (!hasAtLeastTwoNums){
          console.log('Password must have at least 2 digits');
      }
  }}
passwordValidator("logIn%$123");
// console.log('******');
// passwordValidator("MyPass123");
// console.log('******');
// passwordValidator("Pa$123s$s");
