function skiTrip(input) {
    const daysOfStay = Number(input[0]);
    const roomType = input[1];
    const grade = input[2];

    let roomForOnePerson = 18;
    let apartment = 25;
    let presidentApartment = 35;
    let totalCost = 0;

    if (roomType == 'room for one person') {
        totalCost = (daysOfStay - 1) * roomForOnePerson;
    } else if (roomType == 'apartment') {
        totalCost = (daysOfStay - 1) * apartment;
        if (daysOfStay < 10) {
            totalCost *= 0.70;
        } else if (daysOfStay >= 10 && daysOfStay <= 15) {
            totalCost *= 0.65;
        } else if (daysOfStay > 15) {
            totalCost *= 0.50;
        }
    } else if (roomType == 'president apartment') {
        totalCost = (daysOfStay - 1) * presidentApartment;
        if (daysOfStay < 10) {
            totalCost *= 0.90;
        } else if (daysOfStay >= 10 && daysOfStay <= 15) {
            totalCost *= 0.85;
        } else if (daysOfStay > 15) {
            totalCost *= 0.80;
        }
    }
    if (grade == 'positive') {
        totalCost = totalCost * 1.25;
    } else {
        totalCost = totalCost * 0.9;
    }

    console.log(totalCost.toFixed(2));
}
skiTrip(['14','apartment','positive']);