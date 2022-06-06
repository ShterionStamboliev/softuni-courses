function townInfo(town, population, area){
    town = town.toString();
    population = Number(population);
    area = Number(area);
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
}
townInfo('Sofia',
1286383,
492
);