const tbody = document.querySelector('#results tbody');
const form = document.getElementById('form');
const formInputs = {
    firstNameInput: document.querySelector('input[name="firstName"]'),
    lastNameInput: document.querySelector('input[name="lastName"]'),
    facultyNumberInput: document.querySelector('input[name="facultyNumber"]'),
    gradeInput: document.querySelector('input[name="grade"]')
};

window.addEventListener('load', loadStudents);

async function loadStudents() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
        const data = await response.json();
        Object.values(data).forEach(({ firstName, lastName, facultyNumber, grade }) => {
            const studentTr = createElements('tr', '', tbody);
            createElements('td', firstName, studentTr)
            createElements('td', lastName, studentTr)
            createElements('td', facultyNumber, studentTr)
            createElements('td', grade, studentTr)
        });
}

document.getElementById('submit').addEventListener('click', async e => {
    e.preventDefault();
    if (!formInputs.firstNameInput.value 
        || !formInputs.lastNameInput.value 
        || !formInputs.facultyNumberInput.value 
        || !formInputs.gradeInput.value) return;

    const formData = new FormData(form);
    
    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ 
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            facultyNumber: formData.get('facultyNumber'),
            grade: formData.get('grade')
        });
    });
    Object.values(formInputs).forEach(n => n.value = '');
    tbody.replaceChildren();
    loadStudents();
});

function createElements(type, text, parent) {
    const el = document.createElement(type);
    text ? el.textContent = text : '';
    parent ? parent.appendChild(el) : '';
    return el;
}
