<<<<<<< HEAD
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
=======
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
>>>>>>> 8e62e8dd859c43444a795f5030eee3f00e03ad7b
}