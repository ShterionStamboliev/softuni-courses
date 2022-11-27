import { html } from "../../node_modules/lit-html/lit-html.js";
import { editOffers, getOffersById } from "../api/data.js";

const editTemplate = (offers, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="title" id="job-title" placeholder="Title" .value=${offers.title}>
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${offers.imageUrl}>
            <input type="text" name="category" id="job-category" placeholder="Category" .value=${offers.category}>
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50">${offers.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50">${offers.requirements}</textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${offers.salary}>

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {
    const offers = await getOffersById(ctx.params.id);
    // const user = getUserData();
    // const isOwner = user?._id === offers._ownerId;
    ctx.render(editTemplate(offers, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        if (Object.values(data).some(x => x == '')) {
            return alert('Missing fields');
        };
        await editOffers(ctx.params.id, {...data});
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}


