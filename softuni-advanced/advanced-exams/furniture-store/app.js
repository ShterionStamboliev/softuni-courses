window.addEventListener('load', solve);

function solve() {
    const fields = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price'),
        button: document.getElementById('add')
    };
    const furnitureListParent = document.getElementById('furniture-list');
    let total = document.getElementsByClassName('total-price')[0];

    fields.button.addEventListener('click', e => {
        e.preventDefault();
        const modelField = fields.model.value;
        const yearField = +fields.year.value;
        const descriptionField = fields.description.value;
        const priceField = +fields.price.value;
        if (!modelField || !descriptionField || yearField <= 0 || priceField <= 0) return;

        const trInfo = createElements('tr', '', 'info', '', furnitureListParent);
        const trHide = createElements('tr', '', 'hide', '', furnitureListParent);
        createElements('td', `${modelField}`, '', '', trInfo);
        createElements('td', `${priceField.toFixed(2)}`, '', '', trInfo);
        createElements('td', `Year: ${yearField}`, '', '', trHide);
        createElements('td', `Description: ${descriptionField}`, '', 3, trHide);
        const tdButtons = createElements('td', '', '', '', trInfo);
        const moreBtn = createElements('button', 'More Info', 'moreBtn', '', tdButtons);
        const buyBtn = createElements('button', 'Buy it', 'buyBtn', '', tdButtons);

        [...Object.values(fields)].forEach(f => {
            f.value = '';
        });
        moreBtn.addEventListener('click', e => {
            if (e.target.textContent === 'More Info') {
                e.target.textContent = 'Less Info';
                trHide.style.display = 'contents';
            } else {
                e.target.textContent = 'More Info';
                trHide.style.display = 'none';
            }
        });

        buyBtn.addEventListener('click', e => {
            trInfo.remove();        
            trHide.remove();
            const totalSum = +(document.getElementsByClassName('total-price')[0].textContent);
            total.textContent = (totalSum + priceField).toFixed(2)
        });
    });

    function createElements(type, text, className, cSpan, parent) {
        const element = document.createElement(type);
        element.textContent = text;

        if (cSpan) {
            element.setAttribute('colspan', cSpan);
        };
        if (className) {
            element.setAttribute('class', className);
        };
        if (parent) {
            parent.appendChild(element);
        };
        return element;
    }
}
