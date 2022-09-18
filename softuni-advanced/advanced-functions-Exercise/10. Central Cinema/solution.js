function solve() {
    
        const name = document.querySelector('#container input:nth-of-type(1)');
        const hall = document.querySelector('#container input:nth-of-type(2)');
        const ticketPrice = document.querySelector('#container input:nth-of-type(3)');
        const ulMoviesParent = document.querySelector('#movies ul');
        const ulArchiveParent = document.querySelector('#archive ul');
        const clearButton = ulArchiveParent.parentElement.querySelector('button');
        clearButton.addEventListener('click', () => {
            ulArchiveParent.innerHTML = '';
        });
        
        const onScreenBtn = document.querySelector('#container button');
        onScreenBtn.addEventListener('click', addScene);
                
                function addScene(event) {
                    event.preventDefault();
                    if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '' && !isNaN(Number(ticketPrice.value))) {
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
                        const button = li.querySelector('div button');
                        button.addEventListener('click', addArchive);
                    }
                }

                function addArchive(e) {
                    const inputVal = e.target.parentElement.querySelector('input');
                    const ticket = e.target.parentElement.querySelector('strong');
                    const movie = e.target.parentElement.parentElement.querySelector('span');
                    
                    if (inputVal.value !== '' && !isNaN(Number(inputVal.value))) {
                        const sum = Number(inputVal.value) * Number(ticket.textContent);
                        const archiveLi = elements('li');
                        const archiveLiSpan = elements('span', '', '', movie.textContent);
                        const archiveLiStrong = elements('strong', '', '', `Total amount: ${sum.toFixed(2)}`);
                        const archiveLiDivButton = elements('button', '', '', 'Delete');
                        archiveLi.appendChild(archiveLiSpan);
                        archiveLi.appendChild(archiveLiStrong);
                        archiveLi.appendChild(archiveLiDivButton);
                        ulArchiveParent.appendChild(archiveLi);
                        
                        const button = ulArchiveParent.querySelector('button');
                        button.addEventListener('click', onDelete);
                    };
                    e.target.parentElement.parentElement.remove();
                }

                function onDelete(e) {
                    e.target.parentElement.remove();
                }
    
        function elements(type, className, classType, text) {
            const element = document.createElement(type);
            element.textContent = text;
            if (className) {
                element.setAttribute('type', className);
            };
            if (classType) {
                element.setAttribute('placeholder', classType);
            }
            return element;
        }
}
