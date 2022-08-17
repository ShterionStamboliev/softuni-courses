function stringLength(str1, str2, str3) {
    let sum = str1.length + str2.length + str3.length;
    let avg = Math.floor(sum / 3);
    console.log(`${sum}\n${avg}`);
}
stringLength('chocolate', 'ice cream', 'cake');