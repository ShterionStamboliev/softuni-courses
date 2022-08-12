function oddOccurrences(arr) {
    let obj = {};
    arr = arr.toLowerCase().split(' ');

    for (const text of arr) {
        if (!obj.hasOwnProperty(text)) {
            obj[text] = 1;
        } else {
            obj[text] = obj[text] + 1;
        }
    }
    obj = Object.entries(obj);
    let box = [];
    for (const [word, count] of obj) {
        if (count % 2 === 1) {
            box.push(word);
        }
    }
    console.log(box.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');