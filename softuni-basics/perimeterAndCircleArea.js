function perimeterAndArea(input) {
    const r = Number(input[0]);
    let perimeter = Math.PI * r * r;
    let area = 2 * Math.PI * r;
    console.log(perimeter.toFixed(2))
    console.log(area.toFixed(2))
}
perimeterAndArea(['3']);