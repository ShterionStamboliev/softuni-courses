import { render } from "../node_modules/lit-html/lit-html.js";
import page from '../node_modules/page/page.mjs';
import { logout } from "./api/users.js";
import { updateNav } from "./api/utlity.js";
import { createPage } from "./views/create.js";
import { dashboardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

const root = document.getElementById('main-content');

updateNav();

page(decorator);
page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logout);
page('/dashboard', dashboardPage);
page('/create', createPage);
page('/details/:id', detailsPage);


page.start();


function decorator(ctx, next) {
    ctx.render = renderRoot;
    next();
}

function renderRoot(template) {
    render(template, root);
}