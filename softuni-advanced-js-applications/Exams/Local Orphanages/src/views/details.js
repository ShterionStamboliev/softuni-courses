import { html } from "../../node_modules/lit-html/lit-html.js";
import { deletePost, getPost } from "../api/data.js";
import { getUserData } from "../api/utlity.js";

const detailsTemplate = (post, isOwner, isLogged, onDelete) => html`
<section id="details-page">
<h1 class="title">Post Details</h1>
<div id="container">
<div id="details">
    <div class="image-wrapper">
        <img src=${post.imageUrl} alt="Material Image" class="post-image">
    </div>
    <div class="info">
        <h2 class="title post-title">${post.title}</h2>
        <p class="post-description">Description: ${post.description}</p>
        <p class="post-address">Address: ${post.address}</p>
        <p class="post-number">Phone number: ${post.phone}</p>
        <p class="donate-Item">Donate Materials: 0</p>

        ${isLogged && isOwner ? 
        html `<div class="btns">
            <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>
        </div>` : isLogged && !isOwner ? 
        html `<a href="#" class="donate-btn btn">Donate</a>` : ''}
    </div>
</div>
</div>
</section>`

export async function detailsPage(ctx) {
    const user = getUserData();
    const post = await getPost(ctx.params.id);
    const isLogged = user?._id !== undefined;
    const isOwner = user._id === post._ownerId;
    ctx.render(detailsTemplate(post, isOwner, isLogged, onDelete));

    async function onDelete() {
        const dialog = confirm('Are you sure you want to delete this post?');
        if (dialog) {
            await deletePost(ctx.params.id);
        }
        ctx.page.redirect('/dashboard');
    }
}