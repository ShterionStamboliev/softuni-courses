function solve() {
 
    const name = document.querySelector('#container input:nth-of-type(1)');
    const hall = document.querySelector('#container input:nth-of-type(2)');
    const ticketPrice = document.querySelector('#container input:nth-of-type(3)');
    const ulMoviesParent = document.querySelector('#movies ul');
    const ulArchiveParent = document.querySelector('#archive ul');
    const onScreenBtn = document.querySelector('#container button');
    const clearButton = document.querySelector('#archive button');

    onScreenBtn.addEventListener('click', e => {
        e.preventDefault();
        if (name.value === '' || hall.value === '' || ticketPrice.value === '') {
            return;
        };
        if (!Number(ticketPrice.value)) {
            return;
        };
        
        const li = elements('li');
        const liSpan = elements('span', '', '', name.value);
        const liStrong = elements('strong', '', '', `Hall: ${hall.value}`);
        const liDiv = elements('div');
        const liDivStrong = elements('strong', '', '', Number(ticketPrice.value).toFixed(2));
        const liDivInput = elements('input', '', 'Tickets Sold', '');
        const liDivButton = elements('button', '', '', 'Archive');
        li.appendChild(liSpan);
        li.appendChild(liStrong);
        li.appendChild(liDiv);
        liDiv.appendChild(liDivStrong);
        liDiv.appendChild(liDivInput);
        liDiv.appendChild(liDivButton);
        ulMoviesParent.appendChild(li);
        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

        liDivButton.addEventListener('click', ev => {
            ev.preventDefault();

            if (!Number(liDivInput.value)) {
                return;
            };
            const sum = Number(liDivInput.value) * Number(liDivStrong.textContent);
            const archiveLi = elements('li');
            const archiveLiSpan = elements('span', '', '', liSpan.textContent);
            const archiveLiStrong = elements('strong', '', '', `Total amount: ${sum.toFixed(2)}`);
            const archiveLiDivButton = elements('button', '', '', 'Delete');
            archiveLi.appendChild(archiveLiSpan);
            archiveLi.appendChild(archiveLiStrong);
            archiveLi.appendChild(archiveLiDivButton);
            ulArchiveParent.appendChild(archiveLi);
            ev.target.parentElement.parentElement.remove();

            archiveLiDivButton.addEventListener('click', deleteRow => {
                deleteRow.preventDefault();
                deleteRow.target.parentElement.remove();
            });
            clearButton.addEventListener('click', r => {
                r.preventDefault();
                const childEl = r.target.parentElement.children[1].children;
                for (const el of childEl) {
                    el.remove();
                    }
                });
        });
    });

    function elements(type, className, classType, text) {
        const element = document.createElement(type);
        
        if (text) {
            element.textContent = text;
        }
        if (className) {
            element.setAttribute('type', className);
        };
        if (classType) {
            element.setAttribute('placeholder', classType);
        }
        return element;
    }
}