function lowerOrUpper(a){
    a = a.toString();
    if (a === a.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerOrUpper('l');