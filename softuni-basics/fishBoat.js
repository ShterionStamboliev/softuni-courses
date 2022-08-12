function fishingBoat(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const fishermen = Number(input[2]);
    let boatRent = 0;

        switch(season) {
            case 'Spring':
                boatRent = 3000;
                if (fishermen <= 6) {
                    boatRent *= 0.9;
                } else if (fishermen >= 7 && fishermen <= 11) {
                    boatRent *= 0.85;
                } else {
                    boatRent *= 0.75;
                }
            break;
            case 'Summer':
            case 'Autumn':
                boatRent = 4200;
                if (fishermen <= 6) {
                    boatRent *= 0.9;
                } else if (fishermen >= 7 && fishermen <= 11) {
                    boatRent *= 0.85;
                } else {
                    boatRent *= 0.75;
                }
            break;
            case 'Winter':
                boatRent = 2600;
                if (fishermen <= 6) {
                    boatRent *= 0.9;
                } else if (fishermen >= 7 && fishermen <= 11) {
                    boatRent *= 0.85;
                } else {
                    boatRent *= 0.75;
                }
            break; 
        }

        if (fishermen % 2 == 0 && season != 'Autumn') {
            boatRent *= 0.95;
        } else {
            boatRent;
        }

        if (budget >= boatRent) {
            console.log(`Yes! You have ${Math.abs(budget - boatRent).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${Math.abs(budget - boatRent).toFixed(2)} leva.`);
        }

    }
    fishingBoat(['3000','Summer','11']);
