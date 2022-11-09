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