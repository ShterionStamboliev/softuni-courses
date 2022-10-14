window.addEventListener('load', solve);

function solve() {
    const fields = {
        problemDescription: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone')
    }
    const receivedOrdersParent = document.getElementById('received-orders');
    const completedOrdersParent = document.getElementById('completed-orders');
    const productType = document.getElementById('type-product');

    document.querySelector('#form, button').addEventListener('click', e => {
        e.preventDefault();
        const description = fields.problemDescription.value;
        const client = fields.clientName.value;
        const phone = fields.clientPhone.value;

        for (const info of Object.values(fields)) {
            if (info.value === '') return;
        }

        const div = elements('div', '', 'container', '');
        elements('h2', `Product type for repair: ${productType.value}`, '', div);
        elements('h3', `Client information: ${client}, ${phone}`, '', div);
        elements('h4', `Description of the problem: ${description}`, '', div);
        const startBtn = elements('button', 'Start repair', 'start-btn', div);
        const finishBtn = elements('button', 'Finish repair', 'finish-btn', div);
        finishBtn.disabled = true;
        receivedOrdersParent.appendChild(div);
        Object.values(fields).forEach(field => {
            field.value = '';
        });

        startBtn.addEventListener('click', e => {
            e.target.disabled = true;
            finishBtn.disabled = false;
        });

        finishBtn.addEventListener('click', ev => {
            const divEl = ev.target.parentElement;
            ev.target.remove();
            divEl.querySelector('.start-btn').remove();
            divEl.remove();
            completedOrdersParent.appendChild(divEl);
        });

        completedOrdersParent.querySelector('button').addEventListener('click', e => {
            const container = [...e.target.parentElement.querySelectorAll('.container')];
            for (const item of container) {
                item.remove();
            };
        });
    });

    function elements(type, textContent, className, parentEl) {
        const element = document.createElement(type);
        element.textContent = textContent;
        if (parentEl) {
            parentEl.appendChild(element);
        }
        if (className) {
            element.setAttribute('class', className);
        };
        return element;
    }
}