function solve() {
  const form = document.querySelectorAll("input");
  const textArea = document.getElementById('message');
  const ulParent = document.getElementById('list');
  const mailParent = document.getElementsByClassName('sent-list')[0];
  const deletedMail = document.getElementsByClassName('delete-list')[0];

  document.getElementById('reset').addEventListener('click', event => {
    event.preventDefault();
    [...form].forEach(f => f.value = '');
    textArea.value = '';
  });
  
  document.getElementById("add").addEventListener("click", (event) => {
    event.preventDefault();
    let obj = {};

    if (form[0].value === '' && form[1].value === '' && textArea.value === '') {
        return;
    }
    
    [...form].forEach((x) => {
        obj[x.id] = x.value;
    });
    
    const li = elements('li', '', '');
    const hTitle = elements('h4', `Title: ${form[1].value}`);
    const hRecipient = elements('h4', `Recipient Name: ${form[0].value}`);
    ulParent.appendChild(li);
    li.appendChild(hTitle);
    li.appendChild(hRecipient);
    
    const divButtons = elements('div', '', 'list-action');
    const textSpan = elements('span', textArea.value);
    const sendButton = elements('button', 'Send', 'submit', 'send');
    const deleteButton = elements('button', 'Delete', 'submit', 'delete');
    divButtons.appendChild(sendButton);
    divButtons.appendChild(deleteButton);
    li.appendChild(textSpan);
    li.appendChild(divButtons);
    
    [...form].forEach(x => x.value = '');
    textArea.value = '';
    
    sendButton.addEventListener('click', e => {
        const liMail = elements('li', '', '', '', '');
        const spanTo = elements('span', `To: ${obj.recipientName}`);
        const spanTitle = elements('span', ` Title: ${obj.title}`);
        const divMail = elements('div', '', '', '', 'btn')
        divMail.appendChild(sentMailsDeleteButton);
        liMail.appendChild(spanTo);
        liMail.appendChild(spanTitle);
        liMail.appendChild(divMail);
        mailParent.appendChild(liMail);
        
        e.target.parentElement.parentElement.remove();
    });
    
    const sentMailsDeleteButton = elements('button', 'Delete', 'submit', '', 'delete')
    deleteButton.addEventListener('click', evnt => {
        const deletedLi = elements('li', '', '', '', '');
        const deletedToSpan = elements('span', `To: ${obj.recipientName}`);
        const deletedTitleSpan = elements('span', ` Title: ${obj.title}`);
        deletedLi.appendChild(deletedToSpan);
        deletedLi.appendChild(deletedTitleSpan);
        deletedMail.appendChild(deletedLi);
        evnt.target.parentElement.parentElement.remove();
    });

    sentMailsDeleteButton.addEventListener('click', ev => {
        const deletedMailsLi = document.createElement('li');
        const deletedToSpan = elements('span', `To: ${obj.recipientName}`);
        const deletedTitleSpan = elements('span', ` Title: ${obj.title}`);
        deletedMailsLi.appendChild(deletedToSpan);
        deletedMailsLi.appendChild(deletedTitleSpan);
        deletedMail.appendChild(deletedMailsLi)
        console.log(obj);
        ev.target.parentElement.parentElement.remove();
    })
  });

  function elements(type, description, classType, btnType, buttonClass) {
    const element = document.createElement(type);
    element.textContent = description;
    if (classType) {
        element.setAttribute('type', classType);
    }
    if (btnType) {
        element.setAttribute('id', btnType);
    }
    if (buttonClass) {
        element.setAttribute('class', buttonClass);
    }
    return element;
  }
}
solve();
