import { html } from "./node_modules/lit-html/lit-html.js";
import { until } from "./node_modules/lit-html/directives/until.js";
import { getBooks } from "./utility.js";
import { deleteBook } from "./utility.js";

const templ = books => html `
<table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${until(books, html `<tr><td colSpan="3">Loading&hellip;</td></tr>`)}
        </tbody>
    </table>`;

const bookRow = (book, onEdit, onDelete) => html `
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
    <button @click=${onEdit}>Edit</button>
    <button @click=${onDelete}>Delete</button>
    </td>
</tr>`;

export function showBooks(ctx) {
    return templ(loadBooks(ctx));
}

async function loadBooks(ctx) {
    const data = await getBooks();

    const books = Object.entries(data).map(([k, val]) => Object.assign(val, { _id: k}));

    return Object.values(books).map(book => bookRow(book, editor.bind(null, book, ctx), onDelete.bind(null, book._id, ctx)));
}

function editor(book, ctx) {
    ctx.book = book;
    ctx.update();
}

async function onDelete(id, ctx) {
    await deleteBook(id);
    ctx.update();
}