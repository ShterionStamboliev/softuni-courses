function deleteByEmail() {
    const inputFieldValue = document.querySelector('input').value;
    const resultField = document.getElementById('result');
    const tableInfo = [...document.querySelectorAll('tr')];

    tableInfo.forEach(person => {
        if (person.children[1].textContent === inputFieldValue) {
            person.remove();
            resultField.textContent = 'Deleted.'
            document.querySelector('input').value = '';
        } else {
            resultField.textContent = 'Not found.'
            document.querySelector('input').value = '';
        }
    });
}