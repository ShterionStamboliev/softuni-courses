import { login } from "../api/users.js";
import { updateNav } from "../api/utility.js";
import { html } from "../node_modules/lit-html/lit-html.js";

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const pass = form.get('password');
        if (!email || !pass) {
            return alert('Fields musts be filled!');
        };
        await login(email, pass);
        updateNav();
        ctx.page.redirect('/dashboard');
    }

}