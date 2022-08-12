function convertToObject(objectJson) {
    let personInfo = JSON.parse(objectJson);
    const keys = Object.keys(personInfo);
    keys.forEach((key, index) => {
        console.log(`${key}: ${personInfo[key]}`);
    });
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');