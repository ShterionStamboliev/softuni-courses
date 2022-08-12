function hotelRoom(input) {
    let month = input[0];
    let overnight = Number(input[1]);
    
    let apartmentCost = 0;
    let studioCost = 0;

    switch(month) {
        case 'May':
        case 'October':
            studioCost = 50;
            apartmentCost = 65;
            studioCost *= overnight;
            apartmentCost *= overnight;
            if (overnight > 7 && overnight < 14) {
                studioCost -= studioCost * 0.05;
            } else if (overnight > 14) {
                studioCost -= studioCost * 0.3;
                apartmentCost -= apartmentCost * 0.1;
            }
            break;
                
        case 'June':
        case 'September':
            studioCost = 75.20;
            apartmentCost = 68.70;
            studioCost *= overnight;
            apartmentCost *= overnight;
            if (overnight > 14) {
                studioCost -= studioCost * 0.2;
                apartmentCost -= apartmentCost * 0.1;
            }
            break;

        case 'July':
        case 'August':
            studioCost = 76;
            apartmentCost = 77;
            studioCost *= overnight;
            apartmentCost *= overnight;
            if (overnight > 14) {
                apartmentCost -= apartmentCost * 0.1; 
            }
    }
    console.log(`Apartment: ${apartmentCost.toFixed(2)} lv.`);
    console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}
hotelRoom(['August','20']);