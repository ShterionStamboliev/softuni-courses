import { getAlbums } from "../api/data.js";
import { html } from "../node_modules/lit-html/lit-html.js";

const dashboardTemplate = (albums) => html`
<section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        ${albums.length > 0 ? 
        albums.map(dashboardCard) : 
        html `<h2>There are no albums added yet.</h2>`}
    </ul>
</section>`;

const dashboardCard = (album) => html`
<li class="card">
    <img src=${album.imageUrl} alt="travis"/>
    <p>
        <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" href="/details/${album._id}">Details</a>
</li>`;

export async function dashboardPage(ctx) {
    const albums = await getAlbums();
    ctx.render(dashboardTemplate(albums));
}