function solve() {
  const textArea = document.querySelector("textarea");
  const addButton = [...document.querySelectorAll("div[class=product-add]")];
  addButton.forEach((button) => button.addEventListener("click", addProducts));
  document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut)
  const shoppingCart = [];

  function addProducts(btn) {
    if ((btn.target = "BUTTON")) {
      const product = btn.target.parentElement.parentElement;
      const productName = product.querySelector(".product-title").textContent;
      const productPrice = Number(product.querySelector(".product-line-price").textContent);
      shoppingCart.push({
        productName,
        productPrice,
      });
      textArea.value += `Added ${productName} for ${productPrice} to the cart.\n`;
    }
  }
  function checkOut() {
   let finalProducts = new Set();
   shoppingCart.forEach(product => finalProducts.add(product.productName));
   let finalSum = shoppingCart.reduce((a, b) => a + b.productPrice, 0).toFixed(2);
   finalProducts.forEach(prod => console.log(`You bought ${prod}`))
  }
//   textArea.value = ''
}
