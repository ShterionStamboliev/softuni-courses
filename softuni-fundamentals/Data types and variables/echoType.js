function echo(str) {
  if (str === Number(str)) {
    console.log(typeof str);
    console.log(str);
  } else if (str === String(str)) {
    console.log(typeof str);
    console.log(`${str}`);
  } else if (str === null) {
    console.log(typeof str);
    console.log(`Parameter is not suitable for printing`);
  }
}
echo('Hello, JavaScript!');
