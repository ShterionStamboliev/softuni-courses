import {  get, post, del } from "./api.js";

export async function getMaterials() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}

export async function createMaterials(data) {
    return post('/data/posts', data);
}

export async function getPost(id) {
    return get('/data/posts/' + id);
}

export async function deletePost(id) {
    return del('/data/posts/' + id);
}

export async function getOwnPost(ownerId) {
    return get(`/data/posts?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`)
}