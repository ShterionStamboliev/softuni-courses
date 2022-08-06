function palindromeIntegers(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    let num = String(arr[i]);
    let firstDigit = Number(num[0]);
    let lastDigit = num % 10;
    firstDigit === lastDigit ? console.log('true') : console.log('false');
  }
}
// palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32,2,232,1010]);
