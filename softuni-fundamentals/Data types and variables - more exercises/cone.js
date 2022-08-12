function cone(r, h){
    let volume = 0;
    let area = 0;

    volume = (1/3)*Math.PI*(Math.pow(r, 2)* h);
    area = (Math.PI * r * (r + Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);