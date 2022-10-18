window.addEventListener('load', solve);

function solve() {

    const form = {
        genre: document.getElementById('genre'),
        songName: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
        button: document.getElementById('add-btn')
    };

    const hitsContainer = document.getElementById('all-hits').children[0];
    const savedHits = document.getElementById('saved-hits').children[0];
    let count = 0;

    form.button.addEventListener('click', e => {
        e.preventDefault();
        
        const songGenre = form.genre.value;
        const songNames = form.songName.value;
        const authorName = form.author.value;
        const date = form.date.value;

        if (!songGenre || !songNames || !authorName || !date) return;

        const containerDiv = createElement('div', '', 'hits-info', '');
        const img = document.createElement('img');
        img.src = './static/img/img.png';
        containerDiv.appendChild(img);
        createElement('h2', `Genre: ${songGenre}`, '', containerDiv);
        createElement('h2', `Name: ${songNames}`, '', containerDiv);
        createElement('h2', `Author: ${authorName}`, '', containerDiv);
        createElement('h3', `Date: ${date}`, '', containerDiv);
        const saveBtn = createElement('button', 'Save song', 'save-btn', containerDiv);
        const likeBtn = createElement('button', 'Like song', 'like-btn', containerDiv);
        const deleteBtn = createElement('button', 'Delete', 'delete-btn', containerDiv);
        hitsContainer.appendChild(containerDiv);
        for (const input of Object.values(form)) {
            input.value = '';
        };

        likeBtn.addEventListener('click', e => {
            e.preventDefault();
            let totalLikes = document.getElementById('total-likes').children[0].children[0];
            if (e.target.textContent === 'Like song') {
                count++;
            }
            totalLikes = totalLikes.textContent = `Total Likes: ${count}`
            e.target.disabled = true;
        });

        saveBtn.addEventListener('click', e => {
            e.preventDefault();
            saveBtn.remove();
            likeBtn.remove();
            savedHits.appendChild(containerDiv);
        });

        deleteBtn.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.textContent === 'Delete') {
                e.target.parentElement.remove();
            }
        })
    });

    function createElement(type, text, className, parent) {
        const element = document.createElement(type);
        element.textContent = text;

        if (className) {
            element.setAttribute('class', className);
        };
        if (parent) {
            parent.appendChild(element);
        };
        return element;
    }
}