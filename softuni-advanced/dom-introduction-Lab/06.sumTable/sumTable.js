function sumTable() {
    const nums = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0;
    for (const num of nums) {
        const numVal = Number(num.lastElementChild.textContent);
        sum += numVal;
    }
    document.getElementById('sum').textContent = sum;
}