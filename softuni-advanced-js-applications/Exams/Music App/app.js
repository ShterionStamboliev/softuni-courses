import { render } from "./node_modules/lit-html/lit-html.js";
import page from './node_modules/page/page.mjs';
import { logout } from "./src/api/users.js";
import { updateUserNav } from "./src/api/utility.js";
import { catalogPage } from "./src/views/catalog.js";
import { homePage } from "./src/views/home.js";
import { loginPage } from "./src/views/login.js";
import { registerPage } from "./src/views/register.js";

const root = document.getElementById('box');

updateUserNav();

page(decorateTemplate);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logout);
page('/catalog', catalogPage);
// page('', );
// page('', );
page.start();


function decorateTemplate(ctx, next) {
    ctx.render = renderRoot;
    next();
}

function renderRoot(templ) {
    render(templ, root);
}