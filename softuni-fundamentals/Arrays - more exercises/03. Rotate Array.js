function rotate(arr) {
let n = arr.pop();

for (let i = 0; i < n; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  console.log(arr.join(' '));
}
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
