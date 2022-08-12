function rightPlace(str1, char, str2){
    let repl = str1.replace('_', char);
    if (repl === str2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String');