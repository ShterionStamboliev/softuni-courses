function passwordGenerator(input) {
  let word = input.pop().toUpperCase();
  input = input.join('');
  let result = '';
  let index = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        result += word[index];
        index++;
        if (index === word.length) {
            index = 0;
        }
    } else {
        result += input[i];
    }
  }
  result = result.split('').reverse().join('')
  console.log(`Your generated password is ${result}`);
}
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);