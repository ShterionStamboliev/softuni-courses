async function attachEvents() {
    const phonebook = document.getElementById('phonebook');
    
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', async () => {
        const personName = document.getElementById('person');
        const personPhone = document.getElementById('phone');
        if (!personName.value || !personPhone.value) return;
        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ person: personName.value, phone: personPhone.value })
        });
        personName.value = '';
        personPhone.value = '';
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