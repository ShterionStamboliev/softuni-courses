import { render } from "./node_modules/lit-html/lit-html.js";
import { showCreate } from "./bookcreate.js";
import { showBooks } from "./bookslib.js";
import { showUpdate } from "./bookupdate.js";


const main = document.body;

const ctx = {
    update
};

update();

function update() {
    render([
        showBooks(ctx),
        showCreate(ctx),
        showUpdate(ctx)
    ], main);
}


