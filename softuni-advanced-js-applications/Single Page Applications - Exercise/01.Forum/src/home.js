import { showComments } from "./details.js";
import { elements } from "./factory.js";

const main = document.getElementById('main');
const form = document.querySelector('form');

const section = document.getElementById('homepage');
const topicContainer = section.querySelector('div.topic-container');

section.querySelector('div.topic-title').addEventListener('click', showComments);
section.remove();

form.addEventListener('submit', createPost);
form.querySelector('button[class="cancel"]').addEventListener('click', clearFields);

export async function showHomepage(e) {
    e?.preventDefault();
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const data = await response.json();
    topicContainer.replaceChildren(...Object.values(data).map(elements));
    main.replaceChildren(section);
}

async function createPost(e) {
    e.preventDefault();
    const dataForm = new FormData(form);
    const title = dataForm.get('topicName');
    const username = dataForm.get('username');
    const post = dataForm.get('postText');

    if (!title || !username || !post) return;

    try {
       const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, username, post, date: new Date() })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error (err);
        }

        form.reset();
        showHomepage();

    } catch(err) {
        console.log(err.message);
    }
}

function clearFields(e) {
    e.preventDefault();
    form.reset();
}