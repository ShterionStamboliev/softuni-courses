import { editAlbum, getAlbumsById } from "../api/data.js";
import { html } from "../node_modules/lit-html/lit-html.js";

const editTemplate = (albums, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${albums.singer}>
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${albums.album}>
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${albums.imageUrl}>
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${albums.release}>
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${albums.label}>
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${albums.sales}>

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {
    const albums = await getAlbumsById(ctx.params.id);

    ctx.render(editTemplate(albums, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        if (Object.values(data).some(x => x == '')) {
            return alert('All fields are required!');
        }
        await editAlbum(ctx.params.id, { ...data });
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}