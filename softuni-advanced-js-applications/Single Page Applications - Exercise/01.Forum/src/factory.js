
export function elements(post) {
    const divWrapper = createElements('div', 'topic-name-wrapper');
    const divTopic = createElements('div', 'topic-name', divWrapper);
    const a = createElements('a', 'normal', divTopic);
    a.href = '#';
    a.id = post._id;
    createElements('h2', '', a, `${post.title}`);
    const divColumns = createElements('div', 'columns', divTopic);
    const midDiv = createElements('div', '', divColumns);
    const p1 = createElements('p', '', midDiv, `Date: `);
    createElements('time', '', p1, `${post.date}`);
    const divNickname = createElements('div', 'nick-name', midDiv);
    const p2 = createElements('p', '', divNickname, 'Username: ');
    createElements('span', '', p2, `${post.username}`);

    return divWrapper;
}

function createElements(type, className, parent, text) {
    const el = document.createElement(type);
    className ? el.setAttribute('class', className) : '';
    parent ? parent.appendChild(el) : '';
    text ? el.textContent = text : '';

    return el;
}

export function themeTitle(data) {
    const { title, username, post, date, _id } = data;
    const theme = document.createElement('div');
    theme.className = 'theme-title';
    theme.innerHTML = `<div class="theme-name-wrapper">
    <div class="theme-name">
        <h2>${title}</h2>
    </div>
</div>`

    return theme;
}

export function comments(data) {
    const { title, username, post, date, _id } = data;
    const comment = document.createElement('div');
    comment.className = 'header';
    comment.innerHTML = `
     <img src="./static/profile.png" alt="avatar">
    <p><span>${username}</span> posted on <time>${date}</time></p>
    <p class="post-content">${post}
    </p>`;

    return comment;
}

export function userComment(data) {
    const { title, username, post, date, _id } = data;
    const comment = document.createElement('div');
    comment.id = 'user-comment';
    comment.innerHTML = `
    <div class="topic-name-wrapper">
    <div class="topic-name">
    <p><strong>${username}</strong> commented on <time>${date}</time></p>
    <div class="post-content">
        <p>${post}</p>
    </div>
    </div>`
                            
    return comment;
}
