// import * as api from './api.js';
import page from '../node_modules/page/page.mjs';
import { logout, userNav } from './api.js';
import { createPage } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

userNav();
showHome();

page('/', showHome);
page('/login', loginPage);
page('/register', registerPage);
page("/dashboard", showDashboard);
page('/details/:id', showDetails);
page('/create', createPage);
page('/logout', logout);
page.start();
