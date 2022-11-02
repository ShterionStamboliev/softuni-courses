async function attachEvents() {
    const phonebook = document.getElementById('phonebook');
    
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', async () => {
        const person = {
            name: document.getElementById('person'),
            phone: document.getElementById('phone')
        }
        if (!person.name.value || !person.phone.value) return;
        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ person: person.name.value, phone: person.phone.value })
        });
        Object.values(person).forEach(n => {
            n.value = '';
        });
        onLoad();
    });
    async function onLoad() {
        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const data = await response.json();
        phonebook.replaceChildren();
        Object.values(data).forEach(d => {
            const li = elements('li', `${d.person}: ${d.phone}`, phonebook);
            const deleteBtn = elements('button', 'Delete', li);
            deleteBtn.addEventListener('click', async e => {
                await fetch('http://localhost:3030/jsonstore/phonebook/' + d._id, {
                    method: 'DELETE',
                });
                e.target.parentElement.remove();
            });
        });
    };
    function elements(type, text, parent) {
        const el = document.createElement(type);
        text ? el.textContent = text : '';
        parent ? parent.appendChild(el) : '';
        return el;
    }
}
attachEvents();