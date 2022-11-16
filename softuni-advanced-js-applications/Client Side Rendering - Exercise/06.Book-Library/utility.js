const domain = 'http://localhost:3030/jsonstore/collections'

async function getData(url, method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const response = await fetch(domain + url, options);
    
    if (!response.ok) {
        const err = await response.json();
        alert(err.message);
        throw new Error(err.message);
    }

    return response.json();
}

export async function getBooks() {
    return getData('/books');
}

export async function createBook(book) {
    return getData('/books', 'post', book);
}

export async function updateBook(id, book) {
    return getData('/books/' + id, 'put', book);
}

export async function deleteBook(id) {
    return getData('/books/' + id, 'delete');
}

export async function getById(id) {
    return getData('/books/' + id);
}