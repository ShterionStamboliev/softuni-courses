import { html, render } from '/node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';

const main = document.getElementById('contacts');

const contact  = (contactBooks) => html`
<div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${contactBooks.name}</h2>
                <button class="detailsBtn">Details</button>
                <div class="details" id=${contactBooks.id}>
                    <p>Phone number: ${contactBooks.phoneNumber}</p>
                    <p>Email: ${contactBooks.email}</p>
                </div>
            </div>
        </div>`;

render(contacts.map(contact), main);

main.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const parent = e.target.parentElement;
        const detailsButton = parent.querySelector('.details');
        if (detailsButton.style.display === 'block') {
            detailsButton.style.display = 'none';
        } else {
            detailsButton.style.display = 'block';
        }
    }
});