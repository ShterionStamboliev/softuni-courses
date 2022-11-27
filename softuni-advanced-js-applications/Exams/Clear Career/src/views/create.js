import { html } from "../../node_modules/lit-html/lit-html.js";
import { post } from "../api/api.js";

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="title" id="job-title" placeholder="Title">
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url">
            <input type="text" name="category" id="job-category" placeholder="Category">
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary">
            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function createPage(ctx) {

    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const props = Object.fromEntries(form);
        if (Object.values(props).some(x => x == '')) {
            return alert('Missing fields!');
        }
        await post('/data/offers', { ...props });
        ctx.page.redirect('/dashboard');
    }
    ctx.render(createTemplate(onSubmit));
}