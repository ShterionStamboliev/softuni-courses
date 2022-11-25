import { html } from '../../node_modules/lit-html/lit-html.js';
import { editShoe, getShoesById } from '../api/shoes.js';


const editTemplate = (shoes, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoes.brand}>
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoes.model}>
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoes.imageUrl}>
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoes.release}>
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoes.designer}>
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoes.value}>
            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {
    const shoes = await getShoesById(ctx.params.id);

    ctx.render(editTemplate(shoes, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        if (Object.values(data).some(x => x == '')) {
            return alert('All fields are required!');
        }
        await editShoe(ctx.params.id, {...data });
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}