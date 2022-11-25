import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs'
import { logout } from './src/api/users.js';
import { updateUserNav } from './src/api/utility.js';
import { createPage } from './src/views/create.js';
import { dashboardPage } from './src/views/dashboard.js';
import { detailsPage } from './src/views/details.js';
import { editPage } from './src/views/edit.js';
import { homePage } from './src/views/home.js';
import { loginPage } from './src/views/login.js';
import { registerPage } from './src/views/register.js';

const root = document.querySelector('main');

updateUserNav();

page(decorator);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/dashboard', dashboardPage);
page('/add', createPage);
page('/logout', logout);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page.start();

function decorator(ctx, next) {
    ctx.render = renderRoot;
    next();
}

function renderRoot(templ) {
    render(templ, root);
}