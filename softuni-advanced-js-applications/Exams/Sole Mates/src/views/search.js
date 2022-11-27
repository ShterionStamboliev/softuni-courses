import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getShoeCollection } from '../api/shoes.js';
import { getUserData } from '../api/utility.js';

const searchTemplate = (isClicked, onSubmit, shoes, isLogged) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf" @submit=${onSubmit}>
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required>
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    ${isClicked ? loggedUser(shoes, isLogged) : nothing}
</section>`;

const shoeCard = (shoe, isLogged) => html `
        <div id="search-container">

    <ul class="card-wrapper">
<li class="card">
  <img src=${shoe.imageUrl} alt="travis">
  <p>
    <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
  </p>
  <p>
    <strong>Model: </strong
    ><span class="model">${shoe.model}</span>
  </p>
  <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
  ${isLogged ? html `<a class="details-btn" href="/details/${shoe._id}">Details</a>` : nothing}
</li>
</ul>
</div>`

const loggedUser = (shoe) => {
    return html `
     ${shoe.length > 0 ? 
        html `${shoe.map(shoeCard)}` : 
        html `<h2>There are no results found.</h2>`}`
}

export async function searchPage(ctx) {
    ctx.render(searchTemplate(false, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const searchVal = document.getElementById('#search-input').value;
        if (!searchVal) {
            return alert('Search field is empty!')
        }
        const shoes = await getShoeCollection(searchVal);
        const user = getUserData();
        const isLogged = user?._id !== undefined;
        ctx.render(searchTemplate(true, onSubmit, shoes, isLogged));
    }
}
