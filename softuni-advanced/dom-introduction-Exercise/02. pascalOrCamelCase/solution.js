function solve() {
  let text = document.getElementById("text").value.toLowerCase();
  let convention = document.getElementById("naming-convention").value;
  let words = text.split(/\s+/).filter((x) => x);

  if (convention !== "Camel Case" && convention !== "Pascal Case") {
    return (document.getElementById("result").textContent = "Error!");
  } 
  for (let i = 0; i < words.length; i++) {
      if (convention !== 'Camel Case' || i !== 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return document.getElementById('result').textContent = words.join('');
}
