function countStringOccurrences(text, wordToSearch) {
    let count = 0;
    text = text.split(' ');
    for (const info of text) {
        if (info === wordToSearch) {
            count++;
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');