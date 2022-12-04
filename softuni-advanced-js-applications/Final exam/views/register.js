import { register } from "../api/users.js";
import { updateNav } from "../api/utility.js";
import { html } from "../node_modules/lit-html/lit-html.js";

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="text" name="email" id="register-email" placeholder="email"/>
            <input type="password" name="password" id="register-password" placeholder="password"/>
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"/>
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const pass = form.get('password');
        const rePass = form.get('re-password');
        if (!email || !pass || !rePass) {
            return alert('Fields musts be filled!');
        };
        if (pass !== rePass) {
            return alert('Wrong password');
        }
        await register(email, pass);
        updateNav();
        ctx.page.redirect('/dashboard');
    }
}
