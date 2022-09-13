function listOfNames(input) {
    input.sort((a, b) => a.localeCompare(b));
    input.forEach((n, i) => {
        console.log(`${i + 1}.${n}`);
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);