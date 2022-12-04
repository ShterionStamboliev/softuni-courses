import { del, get, post, put } from "./api.js";

export async function getAlbums() {
    return get('/data/albums?sortBy=_createdOn%20desc');
}

export async function getAlbumsById(id) {
    return get('/data/albums/' + id);
}

export async function deleteAlbum(id) {
    return del('/data/albums/' + id);
}

export async function editAlbum(id, data) {
    return put('/data/albums/' + id, data);
}

export async function getAlbumLikes(id) {
   return get(`/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function getLikesAmount(albumId, userId) {
    return get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function likeAlbums(albumId) {
    return post('/data/likes', albumId);
}