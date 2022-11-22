import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllAlbums } from "../api/albums.js";
import { getUserData } from "../api/utility.js";

const catalogTemplate = (album, isLogged) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${album.length === 0 ? html `
    <p>No Albums in Catalog!</p>` : album.map(albums)}
</section>`;

const albums = (allAlbums, isLogged) => html`
<div class="card-box">
        <img src=${allAlbums.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${allAlbums.name}</p>
                <p class="artist">Artist: ${allAlbums.artist}</p>
                <p class="genre">Genre: ${allAlbums.genre}</p>
                <p class="price">Price: $${allAlbums.price}</p>
                <p class="date">Release Date: ${allAlbums.releaseDate}</p>
            </div>
            <div class="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>`;

export async function catalogPage(ctx) {
    const albums = await getAllAlbums();
    const isLogged = getUserData();
    ctx.render(catalogTemplate(albums));
}