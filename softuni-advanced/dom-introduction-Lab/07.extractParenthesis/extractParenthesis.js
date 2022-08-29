function extract(content) {
    const text = document.getElementById(content).textContent;
    const regMatch = /\((.+?)\)/gm
    let match = regMatch.exec(text);
    let res = '';

    while (match) {
        res += match[1] + '; ';
        match = regMatch.exec(text);
    }
    return res;
}
let text = extract("content");