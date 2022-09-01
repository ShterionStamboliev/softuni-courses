function addItem() {
    const inputField = document.getElementById('newItemText').value;
    const newElement = document.createElement('li')
    newElement.textContent = inputField;
    document.getElementById('items').appendChild(newElement);
    document.getElementById('newItemText').value = '';
}