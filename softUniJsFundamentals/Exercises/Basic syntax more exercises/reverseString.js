function reverse(str) {
  let a = "";
  for (let i = str.length - 1; i >= 0; i--) {
    a += str[i];
  }
  console.log(a);
}
reverse("1234");
