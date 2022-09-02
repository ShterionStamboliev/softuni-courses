function addItem() {
    const inputField = document.getElementById('newItemText').value;
    const newElement = document.createElement('li');
    newElement.textContent = inputField;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    newElement.appendChild(deleteButton);
    document.getElementById('items').appendChild(newElement);
    document.getElementById('newItemText').value = '';
    deleteButton.addEventListener('click', function() {
        newElement.remove();
    });
}


