function solve() {
  let textInput = document.getElementById('input').value;
  let resultField = document.getElementById('output');
  let splitted = textInput
  .split('.')
  .filter(text => text.length !== 0)

  
  while (splitted.length > 0) {
    let input = splitted
    .splice(0, 3)
    .join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = input;
    resultField.appendChild(p);
  }
