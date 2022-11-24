import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteAlbum, getAlbumById } from "../api/albums.js";
import { getUserData } from "../api/utility.js";

const detailsTemplate = (album, isLogged, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>
            ${isLogged && isOwner ? html`
            <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>
            </div>` : ''}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const album = await getAlbumById(ctx.params.id);
    const user = getUserData();
    const isLogged = user?._id !== undefined;
    const isOwner = user?._id === album._ownerId;
    ctx.render(detailsTemplate(album, isLogged, isOwner, onDelete));

    async function onDelete() {
        const dialog = confirm('Are you sure you want to delete this album?')
        if (dialog) {
            await deleteAlbum(ctx.params.id);
            ctx.page.redirect('/catalog')
        }
    }
}