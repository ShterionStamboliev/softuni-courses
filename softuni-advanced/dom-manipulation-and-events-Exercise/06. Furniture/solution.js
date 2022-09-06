function solve() {
  document.querySelectorAll('button')[0].addEventListener('click', generate);
  document.querySelectorAll('button')[1].addEventListener('click', buy);
  const buyArea = document.querySelectorAll('textarea')[1];
  
  function generate() {
    const textBody = document.querySelector('tbody');
    const generateArea = JSON.parse(document.querySelector('textarea').value);
    generateArea.forEach(el => {
      const trEl = document.createElement('tr');
      const tdImg = document.createElement('td');
      const tdName = document.createElement('td');
      const tdPrice = document.createElement('td');
      const tdDec = document.createElement('td');
      const imgEl = document.createElement('img');
      const pName = document.createElement('p');
      const pPrice = document.createElement('p');
      const pDec = document.createElement('p');
      const checkbox = document.createElement('td');
      const checkboxInput = document.createElement('input')
      checkboxInput.type = 'checkbox';
      imgEl.src = el.img;
      tdImg.appendChild(imgEl);
      trEl.appendChild(tdImg);
      pName.textContent = el.name;
      tdName.appendChild(pName);
      trEl.appendChild(tdName);
      pPrice.textContent = Number(el.price);
      tdPrice.appendChild(pPrice);
      trEl.appendChild(tdPrice);
      pDec.textContent = Number(el.decFactor);
      tdDec.appendChild(pDec);
      trEl.appendChild(tdDec);
      checkbox.appendChild(checkboxInput);
      trEl.appendChild(checkbox);
      textBody.appendChild(trEl);
    });
  }

  function buy() {
    const cart = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    let checkedInputs = 0;
    const checkboxCheck = [...document.querySelectorAll('tbody input')];
    // console.log(checkboxCheck);
    checkboxCheck.forEach(check => {
      if (check.checked) {
        checkedInputs++;
        let checkParent = check.parentElement.parentElement;
        let itemInfo = [...checkParent.querySelectorAll('p')];
        // console.log(itemInfo);
          cart.push(itemInfo[0].textContent);
          totalPrice += Number(itemInfo[1].textContent)
          avgDecFactor += Number(itemInfo[2].textContent)
      }
    });
    buyArea.textContent += `Bought furniture: ${cart.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor / checkedInputs}`
  }
}