import { post } from "../api/api.js";
import { html } from "../node_modules/lit-html/lit-html.js";

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band">
            <input type="text" name="album" id="album-album" placeholder="Album">
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url">
            <input type="text" name="release" id="album-release" placeholder="Release date">
            <input type="text" name="label" id="album-label" placeholder="Label">
            <input type="text" name="sales" id="album-sales" placeholder="Sales">

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function createPage(ctx) {
    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const props = Object.fromEntries(form);
        if (Object.values(props).some(x => x === '')) {
            return alert('Missing fields');
        }
        await post('/data/albums', { ...props });
        ctx.page.redirect('/dashboard');
    }
    ctx.render(createTemplate(onSubmit));
}