function addressBook(arr) {
    let obj = {};

    for (let info of arr) {
        let [personName, personAddress] = info.split(':');
        obj[personName] = personAddress;
    }
    let sorted = Object.entries(obj);
    let sortedEntries = sorted.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })
    for (const [name, address] of sortedEntries) {
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);