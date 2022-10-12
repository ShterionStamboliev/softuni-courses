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
  
  document.getElementById("add").addEventListener("click", event => {
    event.preventDefault();
    let obj = {};

    if (form[0].value === '' && form[1].value === '' && textArea.value === '') {
        return;
    }
    
    [...form].forEach((x) => {
        obj[x.id] = x.value;
    });
    
    const li = elements('li', '', '',);
    elements('h4', `Title: ${form[1].value}`, '', '', '', li);
    elements('h4', `Recipient Name: ${form[0].value}`,'','','', li);
    ulParent.appendChild(li);
    
    const divButtons = elements('div', '', 'list-action','','', li);
    elements('span', textArea.value, '','','', li);
    const sendButton = elements('button', 'Send', 'submit', 'send');
    const deleteButton = elements('button', 'Delete', 'submit', 'delete');
    divButtons.appendChild(sendButton);
    divButtons.appendChild(deleteButton);
    
    [...form].forEach(x => x.value = '');
    textArea.value = '';
    
    sendButton.addEventListener('click', e => {
        const liMail = elements('li', '', '', '', '');
        elements('span', `To: ${obj.recipientName}`,'','','', liMail);
        elements('span', ` Title: ${obj.title}`,'','','', liMail);
        const divMail = elements('div', '', '', '', 'btn', liMail)
        divMail.appendChild(sentMailsDeleteButton);
        mailParent.appendChild(liMail);
        
        e.target.parentElement.parentElement.remove();
    });
    
    const sentMailsDeleteButton = elements('button', 'Delete', 'submit', '', 'delete')
    deleteButton.addEventListener('click', evnt => {
        const deletedLi = elements('li', '', '', '', '');
        elements('span', `To: ${obj.recipientName}`,'','','', deletedLi);
        elements('span', ` Title: ${obj.title}`,'','','', deletedLi);
        deletedMail.appendChild(deletedLi);
        evnt.target.parentElement.parentElement.remove();
    });

    sentMailsDeleteButton.addEventListener('click', ev => {
        const deletedMailsLi = document.createElement('li');
        elements('span', `To: ${obj.recipientName}`,'','','', deletedMailsLi);
        elements('span', ` Title: ${obj.title}`,'','','', deletedMailsLi);
        deletedMail.appendChild(deletedMailsLi)
        ev.target.parentElement.parentElement.remove();
    });
  });

  function elements(type, description, classType, btnType, buttonClass, parentEl) {
    const element = document.createElement(type);
    element.textContent = description;
    if (parentEl) {
      parentEl.appendChild(element);
    }
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
