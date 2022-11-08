const tbody = document.getElementById('tableBody');
const submitForm = document.getElementById('formSubmit');
const saveForm = document.getElementById('formSave');
const bookTitle = document.querySelector('input[name="title"]');
const bookAuthor = document.querySelector('input[name="author"]');

document.getElementById('loadBooks').addEventListener('click', loadBooks);
document.getElementById('submitBtn').addEventListener('click', submitBook);
document.getElementById('saveBtn').addEventListener('click', onSave);
tbody.addEventListener('click', buttonActions);

tbody.innerHTML = '';
loadBooks();

async function loadBooks() {
    const books = await fetch('http://localhost:3030/jsonstore/collections/books');
    const bookData = await books.json();
    const res = Object.entries(bookData).map(([id, book]) => createBook(id, book));
    tbody.replaceChildren(...res);
}

async function submitBook(ev) {
    ev.preventDefault();
    const newData = new FormData(submitForm);
    if (!bookTitle.value || !bookAuthor.value) return;
    await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ author: newData.get('author'), title: newData.get('title') })
    });
    submitForm.reset();
}

function buttonActions(ev) {
    ev.preventDefault();
    if (ev.target.textContent === 'Edit') {
        onEdit(ev);
    } else if (ev.target.textContent === 'Delete') {
        onDelete(ev);
    }
}

function onDelete(e) {
    const elementId = e.target.parentElement.parentElement.id;
    fetch('http://localhost:3030/jsonstore/collections/books/' + elementId, {
        method: 'DELETE',
    });
    e.target.parentElement.parentElement.remove();
}

async function onEdit(e) {
    const elementId = e.target.parentElement.parentElement.id;
    const book = await fetch('http://localhost:3030/jsonstore/collections/books/' + elementId);
    const bookData = await book.json();
    submitForm.style.display = 'none';
    saveForm.style.display = 'block';
    formSave.querySelector('input[name="id"]').value = elementId;
    formSave.querySelector('input[name="author"]').value = bookData.author;
    formSave.querySelector('input[name="title"]').value = bookData.title;
    submitForm.reset();
}

async function onSave(e) {
    e.preventDefault();
    const newFormData = new FormData(saveForm);
    const elementId = newFormData.get('id');
    await fetch('http://localhost:3030/jsonstore/collections/books/' + elementId, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ author: newFormData.get('author'), title: newFormData.get('title') })
    });
    submitForm.style.display = 'block';
    saveForm.style.display = 'none';
    submitForm.reset();
}

function createBook(id, book) {
    const tr = element('tr', '', id, tbody);
    element('td', book.title, '', tr);
    element('td', book.author, '', tr);
    const td = element('td', '', '', tr);
    element('button', 'Edit', '', td);
    element('button', 'Delete', '', td);
    return tr;
}

function element(type, text, id, parent) {
    const el = document.createElement(type);
    text ? el.textContent = text : '';
    id ? el.setAttribute('id', id) : '';
    parent ? parent.appendChild(el) : '';
    return el;
}