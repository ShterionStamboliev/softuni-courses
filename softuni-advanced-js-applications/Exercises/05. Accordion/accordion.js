async function solution() {
    const main = document.getElementById('main');
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();
    
    Object.values(data).forEach(({ _id, title }) => {
        const divAccordion = elements('div', '', 'accordion', '', main);
        const divHead = elements('div', '', 'head', '', divAccordion);
        const divExtra = elements('div', '', 'extra', '', divAccordion);
        divExtra.style.display = 'none';
        elements('span', title, '', '', divHead);
        elements('button', 'More', 'button', _id, divHead);
        elements('p', '', '', '', divExtra);
    });
    const allBtns = [...main.querySelectorAll('button')];
    allBtns.forEach(b => {
        b.addEventListener('click', async (e) => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + b.id);
            const data = await response.json();
            e.target.parentElement.parentElement.children[1].querySelector('p').textContent = data.content;
            if (e.target.textContent === 'More') {
                e.target.textContent = 'Less';
                e.target.parentElement.parentElement.children[1].style.display = 'block';
            } else if (e.target.textContent === 'Less') {
                e.target.textContent = 'More';
                e.target.parentElement.parentElement.children[1].style.display = 'none';
            }
        });
    });
}
function elements(type, text, className, ids, parent) {
    const el = document.createElement(type);
    if (text) {
        el.textContent = text;
    }
    if (className) {
        el.setAttribute('class', className);
    }
    if (parent) {
        parent.appendChild(el);
    }
    if (ids) {
        el.id = ids;
    }
    return el;
};
solution();
