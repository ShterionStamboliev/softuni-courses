import { html } from "./node_modules/lit-html/lit-html.js";
import { updateBook } from "./utility.js";

const updateTempl = (book, ctx) => html` 
<form @submit=${e => onSubmit(e, ctx)} id="edit-form">
    <input type="hidden" name="id" .value=${book._id}>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book.author}>
    <input type="submit" value="Save">
</form>`;

export function showUpdate(ctx) {
    if (ctx.book === undefined) {
        return null;
    } else {
        return updateTempl(ctx.book, ctx)
    }
}

async function onSubmit(e, ctx) {
    e.preventDefault();
    const data = new FormData(e.target);

    const id = data.get('id');
    const title = data.get('title').trim();
    const author = data.get('author').trim();
    
    await updateBook(id, { title, author });

    e.target.reset();
    delete ctx.book;
    ctx.update();
}