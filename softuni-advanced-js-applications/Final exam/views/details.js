import { deleteAlbum, getAlbumsById } from "../api/data.js";
import { getUserData } from "../api/utility.js";
import { html } from "../node_modules/lit-html/lit-html.js";

const detailsTemplate = (albums, isOwner, onDelete, isLogged) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${albums.imageUrl} alt="example1">
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${albums.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${albums.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${albums.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${albums.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${albums.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">0</span></div>

        ${isOwner ? html`
        <div id="action-buttons">
            <a href="/edit/${albums._id}" id="edit-btn">Edit</a>
            <a href="javascript.void(0)" @click=${onDelete} id="delete-btn">Delete</a>
        </div>` : html`<div id="action-buttons">
            <a href="javascript.void(0)" id="like-btn">Like</a>
        </div>`}
    </div>
</section>`;

export async function detailsPage(ctx) {
    const albums = await getAlbumsById(ctx.params.id);
    const user = getUserData();
    const isOwner = user?._id === albums._ownerId;
    const isLogged = user?._id !== undefined;
    ctx.render(detailsTemplate(albums, isOwner, onDelete, isLogged));

    async function onDelete(e) {
        e.preventDefault();

        const dialog = confirm('Are you sure you want to delete this album?');
        if (dialog) {
            await deleteAlbum(ctx.params.id);
            ctx.page.redirect('/dashboard');
        }
    }
}