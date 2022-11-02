async function attachEvents() {
    const textArea = document.getElementById('messages');

    document.getElementById('refresh').addEventListener('click', async () => {
        const res = [];
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await response.json();
        Object.values(data).forEach(n => {
            res.push(`${n.author}: ${n.content}`);
            textArea.value = res.join('\n');
        });
    });

    document.getElementById('submit').addEventListener('click', async () => {
        const nameField = document.querySelector('input[name="author"]');
        const messageField = document.querySelector('input[name="content"]');
        if (!nameField.value || !messageField.value) return;
        await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ author: nameField.value, content: messageField.value })
        });
        nameField.value = '';
        messageField.value = '';
    });
}
attachEvents();