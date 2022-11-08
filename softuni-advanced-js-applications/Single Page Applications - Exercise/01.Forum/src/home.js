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
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/');
    const data = await response.json();
    const dataFragment = new DocumentFragment();
    console.log(dataFragment);
    Object.values(data).forEach(el => {
        // TO DO TOMORROW....
        const divWrapper = createElements('div', 'topic-name-wrapper');
        const divTopicName = createElements('div', 'topic-name', divWrapper);
        const a = createElements('a', 'normal', divTopicName);
        a.href = "#";
        a.id = el._id;
        createElements('h2', '', a, el.title);
        const divColumns = createElements('div', 'columns', divTopicName);
        const div = createElements('div', '', divColumns);
        const p1 = createElements('p', '', div, 'Date:');
        createElements('time', '', p1, el.date);
        const divNickName = createElements('div', 'nick-name', div);
        const p2 = createElements('p', '', divNickName, 'Username:');
        createElements('span', '', p2, el.username);
    });
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