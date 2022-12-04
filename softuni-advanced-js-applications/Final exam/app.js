import { logout } from "./api/users.js";
import { updateNav } from "./api/utility.js";
import { render } from "./node_modules/lit-html/lit-html.js";
import page from './node_modules/page/page.mjs';
import { createPage } from "./views/create.js";
import { dashboardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

const root = document.querySelector('main');

updateNav();

page(decorator);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logout);
page('/dashboard', dashboardPage);
page('/add', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page.start();

function decorator(ctx, next) {
    ctx.render = renderRoot;
    next();
}

function renderRoot(template) {
    render(template, root);
}