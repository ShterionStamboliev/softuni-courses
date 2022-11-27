import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteOffer, getOffersById } from "../api/data.js";
import { getUserData } from "../api/utility.js";

const detailsTemplate = (offers, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offers.imageUrl} alt="example1">
        <p id="details-title">${offers.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offers.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offers.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offers.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offers.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>

        ${isOwner ? html`
        <div id="action-buttons">
            <a href="/edit/${offers._id}" id="edit-btn">Edit</a>
            <a href="javascript.void(0)" @click=${onDelete} id="delete-btn">Delete</a>
        </div>` : ''}
    </div>
</section>`;

export async function detailsPage(ctx) {
    const offers = await getOffersById(ctx.params.id);
    const user = getUserData();
    const isOwner = user?._id === offers._ownerId;
    ctx.render(detailsTemplate(offers, isOwner, onDelete));

    async function onDelete(e) {
        e.preventDefault();

        const dialog = confirm('Are you sure you want to delete this offer?');
        if (dialog) {
            await deleteOffer(ctx.params.id);
            ctx.page.redirect('/dashboard');
        }
    }
}


