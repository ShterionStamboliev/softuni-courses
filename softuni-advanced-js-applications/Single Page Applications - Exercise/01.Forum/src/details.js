import { themeTitle } from "./factory.js";
import { comments } from "./factory.js";
import { userComment } from "./factory.js";

const section = document.getElementById('comments');
section.remove();

let postId;

const divTheme = section.querySelector('div[class="theme-title"]');
const divComment = section.querySelector('div[class="comment"]');
const commentsList = document.getElementById('user-comment');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function showComments(ev) {
    ev.preventDefault();
    let target = ev.target;
    if (target.tagName === 'H2') {
        target = target.parentElement;
    }
    if (target.tagName === 'A') {
        ev.preventDefault();

        const commentId = target.id;
        commentDetails(commentId);
    }
}

async function commentDetails(postId) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + postId);
    const data = await response.json();
    form.id = postId;

    const commentsRes = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments/')
    const commentData = await commentsRes.json();
    divComment.replaceChildren(Object.values(commentData).filter(c => c.postId === postId).map(userComment));

    const loadTitle = themeTitle(data);
    divTheme.replaceChildren(loadTitle);

    const loadComments = comments(data);
    divComment.replaceChildren(loadComments);

    const appendComments = userComment(commentData);
    divComment.appendChild(appendComments);

    document.getElementById('main').replaceChildren(section);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const user = formData.get('username');
    const post = formData.get('postText');
    const postId = form.id;

    try {
        if (!user || !post) {
            throw new Error('All fields are required')
        }
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ user, post, postId, date: new Date() })
        });
        if (res.ok != true) {
            throw new Error('Error on submit');
        }
        form.reset();
        commentDetails(postId);
    } catch(err) {
        alert(err.message);
    }
}

async function loadCommentsPost(data) {
    
}