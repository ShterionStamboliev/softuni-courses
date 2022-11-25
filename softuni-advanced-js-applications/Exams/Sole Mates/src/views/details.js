import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoe, getShoesById } from '../api/shoes.js';
import { getUserData } from '../api/utility.js';

const detailsTemplate = (shoes, isOwner, isLogged, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${shoes.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoes.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoes.release}</span></p>
            <p>Designer: <span id="details-designer">${shoes.designer}</span></p>
            <p>Value: <span id="details-value">${shoes.value}</span></p>
        </div>
        ${isOwner && isLogged 
            ? html `<div id="action-buttons">
                        <a href="/edit/${shoes._id}" id="edit-btn">Edit</a>
                        <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
                    </div>` 
            : ''}
    </div>
</section>`;

export async function detailsPage(ctx) {
    const user = getUserData();
    const shoes = await getShoesById(ctx.params.id);
    const isOwner = user?._id === shoes._ownerId;
    const isLogged = user?._id !== undefined;

    ctx.render(detailsTemplate(shoes, isOwner, isLogged, onDelete));

    async function onDelete() {
        const dialog = confirm('Are you sure you want to delete these sneakers?');
        if (dialog) {
            await deleteShoe(ctx.params.id);
            ctx.page.redirect('/dashboard');
        }   
    };
}