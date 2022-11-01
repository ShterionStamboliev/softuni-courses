async function solution() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();
    
    Object.values(data).forEach(({ _id, title }) => {
        const divAccordion = elements('div', '', 'accordion', '', document.getElementById('main'));
        const divHead = elements('div', '', 'head', '', divAccordion);
        const divExtra = elements('div', '', 'extra', '', divAccordion);
        divExtra.style.display = 'none';
        elements('span', title, '', '', divHead);
        elements('button', 'More', 'button', _id, divHead);
        elements('p', '', '', '', divExtra);
    });
    const allBtns = [...document.getElementById('main').querySelectorAll('button')];
    allBtns.forEach(b => {
        b.addEventListener('click', async (e) => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + b.id);
            const data = await response.json();
            e.target.parentElement.parentElement.children[1].querySelector('p').textContent = data.content;
            if (e.target.textContent === 'More') {
                e.target.textContent = 'Less';
                e.target.parentElement.parentElement.children[1].style.display = 'block';
            } else {
                e.target.textContent = 'More';
                e.target.parentElement.parentElement.children[1].style.display = 'none';
            }
        });
    });
}
function elements(type, text, className, ids, parent) {
    const el = document.createElement(type);
        text ? el.textContent = text : '';
        className ? el.setAttribute('class', className) : '';
        parent ? parent.appendChild(el) : '';
        ids ? el.id = ids : '';
        return el;
};
solution();