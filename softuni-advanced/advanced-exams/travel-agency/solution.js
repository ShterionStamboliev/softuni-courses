window.addEventListener('load', solution);

function solution() {
  const form = {
    fname: document.getElementById('fname'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    address: document.getElementById('address'),
    postal: document.getElementById('code'),
  };
  const submitBtn = document.getElementById('submitBTN');
  const infoPreview = document.getElementById('infoPreview');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const diviBlock = document.getElementById('block');
  submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const fname = form.fname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const postal = form.postal.value;

    if (!fname || !email) return;

    createElements('li', `Full Name: ${fname}`, '', infoPreview);
    createElements('li', `Email: ${email}`, '', infoPreview);
    createElements('li', `Phone Number: ${phone}`, '', infoPreview);
    createElements('li', `Address: ${address}`, '', infoPreview);
    createElements('li', `Postal Code: ${postal}`, '', infoPreview);
    [...Object.values(form)].forEach(input => input.value = '');
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener('click', () => {
      form.fname.value = fname;
      form.email.value = email;
      form.phone.value = phone;
      form.address.value = address;
      form.postal.value = postal;
      [...infoPreview.childNodes].forEach(c => c.remove())
      editBtn.disabled = true;
      continueBtn.disabled = true;
      submitBtn.disabled = false;
    });

    continueBtn.addEventListener('click', () => {
     [...diviBlock.childNodes].forEach(n => n.remove());
     createElements('h3', 'Thank you for your reservation!', '', diviBlock);
    });
  });
  function createElements(type, text, classType, parent) {
    const element = document.createElement(type);
    element.textContent = text;
    if (classType) {
      element.setAttribute('id', classType);
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
