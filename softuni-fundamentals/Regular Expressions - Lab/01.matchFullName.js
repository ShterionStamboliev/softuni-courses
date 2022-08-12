function matchFullName(input){
    let regx = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g;
    let match = regx.exec(input);
    let box = [];

    while(match !== null) {
        box.push(match[0]);
        match = regx.exec(input);
    }
    console.log(box.join(' '));
}
matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov')