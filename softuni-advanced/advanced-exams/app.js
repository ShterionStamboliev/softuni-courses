window.addEventListener("load", solve);

function solve() {
  const form = document.querySelectorAll('input, select');
  const tableBody = document.getElementById('table-body');
  const carsList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');
  let sum = 0;

    document.getElementById('publish').addEventListener('click', event => {
      event.preventDefault();
      let obj = {};

     if ([...form].forEach(n => n.value.trim() === '')) {
      return;
     } 

      [...form].forEach(el => {
        obj[el.id] = el.value;
      });

      if (Number(obj['original-cost']) >= Number(obj['selling-price'])) {
        return;
      }

      const tr = elements('tr', '', 'row');
      Object.keys(obj).forEach(el => {
        const td = elements('td', obj[el]);
        tr.appendChild(td);
      });

      const editButton = elements('button', 'Edit', 'action-btn edit'); 
      const sellButton = elements('button', 'Sell', 'action-btn sell');
      const buttonsTd = elements('td','');
      buttonsTd.appendChild(editButton);
      buttonsTd.appendChild(sellButton);
      tr.appendChild(buttonsTd);
      tableBody.appendChild(tr);
      [...form].forEach(n => n.value = '');

      editButton.addEventListener('click', event => {
        [...form].forEach(input => {
          input.value = obj[input.id];
        });
        event.target.parentElement.parentElement.remove();
      });

      sellButton.addEventListener('click', event => {
        const li = elements('li', '', 'each-list');
        const carModelSpan = elements('span', obj.make + ' ' + obj.model);
        const carYearSpan = elements('span', `${obj.year}`);
        const profitSpan = elements('span', Number(obj['selling-price']) - Number(obj['original-cost']));
        li.appendChild(carModelSpan);
        li.appendChild(carYearSpan);
        li.appendChild(profitSpan);
        carsList.appendChild(li);
        sum += Number(obj['selling-price']) - Number(obj['original-cost'])
        profit.textContent = Math.round(sum).toFixed(2);
        event.target.parentElement.parentElement.remove();
      });
    });
    function elements(type, description, classType) {
      const element = document.createElement(type);
      element.textContent = description;
      if (classType) {
        element.className = classType;
      }
      return element;
}
}
