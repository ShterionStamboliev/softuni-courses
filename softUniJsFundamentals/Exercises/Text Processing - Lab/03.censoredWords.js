function censoredWords(text, word) {
    let target = '*'
    let repeated = target.repeat(word.length);
    while (text.includes(word)) {
            text = text.replace(word, repeated);
    }
    console.log(text);
}
censoredWords('A small sentence with some words', 'small');