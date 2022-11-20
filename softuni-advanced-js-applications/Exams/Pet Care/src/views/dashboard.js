import { html, render } from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('content');

export async function showDashboard() {
    const data = await fetch('http://localhost:3030/data/pets?sortBy=_createdOn%20desc&distinct=name');
    const res = await data.json();
        const div = html`
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${res.length === 0 ? html` <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>` : res.map(e => html`<div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="${e.image}">
                    </article>
                    <h2 class="name">${e.name}</h2>
                    <h3 class="breed">${e.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${e._id}">Details</a>
                    </div>
                </div>`)}
            </div>
        </section>`;
        render(div, root);
}
