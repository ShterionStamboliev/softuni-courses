import { showComments } from "./details.js";


const section = document.getElementById('homepage');
section.querySelector('div.topic-title').addEventListener('click', showComments);
const main = document.querySelector('main');
const form = document.querySelector('form');
const topicContainer = section.querySelector('div.topic-container');

section.remove();

form.addEventListener('submit', createPost);
form.querySelector('button[class="cancel"]').addEventListener('click', clearFields);

export async function showHomepage(e) {
    e?.preventDefault();
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const data = await response.json();
    topicContainer.replaceChildren(...Object.values(data).map(post => {
        const divWrapper = document.createElement('div');
        divWrapper.className = 'topic-name-wrapper';
        divWrapper.innerHTML = 
        `<div class="topic-name">
        <a href="#" class="normal" id="${post._id}">
            <h2>${post.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${post.date}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${post.username}</span></p>
                </div>
            </div>
        </div>
    </div>`
    return divWrapper;
 }));
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

function createElements(type, className, parent, text) {
    const el = createElements(type);
    className ? el.setAttribute('class', className) : '';
    parent ? parent.appendChild(el) : '';
    text ? el.textContent = text : '';
    return el;
}