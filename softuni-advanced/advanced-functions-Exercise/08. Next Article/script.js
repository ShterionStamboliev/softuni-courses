function getArticleGenerator(articles) {
  const textField = document.getElementById("content");

  return (articleText = () => {
    const text = articles.shift();
    if (text != undefined) {
      const el = document.createElement("article");
      el.textContent = text;
      textField.appendChild(el);
    }
  });
}
