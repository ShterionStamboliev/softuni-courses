import { html } from "./node_modules/lit-html/lit-html.js";
import { createBook } from "./utility.js";


const createTempl = (onSuccess) => html`
<form @submit=${e => onSubmit(e, onSuccess)} id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;

export function showCreate(ctx) {
    if (ctx.book == undefined) {
        return createTempl(ctx.update);
    } else {
        return null;
    }
}

async function onSubmit(e, onSuccess) {
    e.preventDefault();
    const data = new FormData(e.target);

    const title = data.get('title').trim();
    const author = data.get('author').trim();
    if (!title || !author) return;
    
    await createBook({ title, author });
    e.target.reset();
    onSuccess();
}