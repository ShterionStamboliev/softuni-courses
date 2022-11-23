import { get } from "./api.js";


export async function getAllAlbums() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function getAlbumById(id) {
    return get('/data/albums/' + id);
}