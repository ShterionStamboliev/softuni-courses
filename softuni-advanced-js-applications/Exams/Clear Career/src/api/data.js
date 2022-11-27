import { del, get, put } from "./api.js";

export async function getOffers() {
    return get('/data/offers?sortBy=_createdOn%20desc');
}

export async function getOffersById(id) {
    return get('/data/offers/' + id);
}

export async function deleteOffer(id) {
    return del('/data/offers/' + id);
}

export async function editOffers(id, data) {
    return put('/data/offers/' + id, data);
}