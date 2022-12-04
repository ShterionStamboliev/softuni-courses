import { html } from "../../node_modules/lit-html/lit-html.js";
import { getOwnPost } from "../api/data.js";
import { getUserData } from "../api/utlity.js";

const postTemplate = (posts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
${posts.length > 0 ? 
    posts.map(postTempl) : 
    html `<h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>`;

const postTempl = (post) => html`
<div class="my-posts">
    <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <img class="post-image" src=${post.imageUrl} alt="Material Image">
        <div class="btn-wrapper">
            <a href="/details/${post._id}" class="details-btn btn">Details</a>
        </div>
    </div>
</div>`;

export async function postPage(ctx) {
    const user = getUserData();
    const userId = user._id;
    const posts = await getOwnPost(userId);
    console.log(posts);
    ctx.render(postTemplate(posts));
}