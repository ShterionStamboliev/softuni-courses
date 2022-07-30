function starEnigma(input) {
    let numOfPlanets = Number(input.shift());
    let pattern = /[starSTAR]/g;
    let res = '';
    let keyCount = 0;
    let planet = [];
    
    for (let word of input) {
        let splitted = word.split('')
        for (const ch of splitted) {
            if (ch.match(pattern)) {
                keyCount++;
            }
        }

        for (const ch of splitted) {
            let chCode = ch.charCodeAt(0);
            let result = String.fromCharCode(chCode - keyCount);
            res += result;
        }
        keyCount = 0;
        planet.push(res)
        res = '';
    }
    let destroyedCount = 0;
    let attackedCount = 0;
    let destroyed = [];
    let attacked = [];

    let match = /@(?<planetName>[A-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attack>[AD])![^@\-!:>]*\->(?<soldierCount>\d+)/g;
    let planetsMatch = match.exec(planet);

    while (planetsMatch) {
        planetsMatch.groups.attack === 'A' ? attackedCount++ : destroyed.push(planetsMatch.groups.planetName) 
        planetsMatch.groups.attack === 'D' ? destroyedCount ++ : attacked.push(planetsMatch.groups.planetName)
        planetsMatch = match.exec(planet);
    }
    attacked.sort((a, b) => a.localeCompare(b));
    destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedCount}`);
    for (const planet of attacked) {
        attacked.length !== 0 ? console.log(`-> ${planet}`) : ''
    }
    console.log(`Destroyed planets: ${destroyedCount}`);
    for (const planet of destroyed) {
        destroyed.length !== 0 ? console.log(`-> ${planet}`) : ''
    }
}

starEnigma([
'2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR'
]);
console.log('=========*=========');
starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])
