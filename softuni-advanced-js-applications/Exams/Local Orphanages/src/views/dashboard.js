import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMaterials } from "../api/data.js";

const dashboardTemplate = (materials) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    <div class="all-posts">
    ${materials.length > 0 ? 
    materials.map(materialsTempl) :
    html `<h1 class="title no-posts-title">No posts yet!</h1>`}
    </div>

</section>`;

const materialsTempl = (material) => html`
<div class="post">
    <h2 class="post-title">${material.title}</h2>
    <img class="post-image" src=${material.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${material._id}" class="details-btn btn">Details</a>
    </div>
</div>`;

export async function dashboardPage(ctx) {
    const materials = await getMaterials();
    ctx.render(dashboardTemplate(materials));
}