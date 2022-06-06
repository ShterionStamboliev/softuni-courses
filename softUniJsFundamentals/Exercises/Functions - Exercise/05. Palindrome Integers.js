function palindromeIntegers(arr) {
  let isPalindrome = false;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let firstDigit = String(arr).charAt(0);
    let firstDigitNumber = Number(firstDigit);
    let lastDigit = num % 10;
    if (firstDigitNumber === lastDigit) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }
  console.log(isPalindrome);
}
palindromeIntegers([123, 323, 421, 121]);
