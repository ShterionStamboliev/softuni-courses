import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllAlbums } from "../api/albums.js";
import { getUserData } from "../api/utility.js";

const catalogTemplate = (albums, isLogged) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${albums.length === 0 
    ? html `<p>No Albums in Catalog!</p>` 
    : isLogged && albums.length !== 0 
    ? albums.map(userAlbumCard) 
    : albums.map(guestAlbumCard)}
</section>`;

const userAlbumCard = card => html `
<div class="card-box">
<img src=${card.imgUrl}>
<div>
    <div class="text-center">
        <p class="name">Name: ${card.name}</p>
        <p class="artist">Artist: ${card.artist}</p>
        <p class="genre">Genre: ${card.genre}</p>
        <p class="price">Price: $${card.price}</p>
        <p class="date">Release Date: ${card.releaseDate}</p>
    </div>
    <div class="btn-group">
        <a href="/details/${card._id}" id="details">Details</a>
    </div>
</div>
</div>`;

const guestAlbumCard = card => html `
<div class="card-box">
<img src=${card.imgUrl}>
<div>
    <div class="text-center">
        <p class="name">Name: ${card.name}</p>
        <p class="artist">Artist: ${card.artist}</p>
        <p class="genre">Genre: ${card.genre}</p>
        <p class="price">Price: $${card.price}</p>
        <p class="date">Release Date: ${card.releaseDate}</p>
    </div>
</div>
</div>`;

export async function catalogPage(ctx) {
    const albums = await getAllAlbums();
    const user = getUserData();
    const isLogged = user?._id !== undefined;
    ctx.render(catalogTemplate(albums, isLogged));
}