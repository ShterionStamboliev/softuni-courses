function summerOutfit(input) {
    const weatherTemp = Number(input[0]); 
    const dayTime = input[1];

    let outfit;
    let shoes;

    if (weatherTemp >= 10 && weatherTemp <= 18 && dayTime == 'Morning') {
        outfit = 'Sweatshirt';
        shoes = 'Sneakers';
    } else if (weatherTemp >= 10 && weatherTemp <= 18 && dayTime == 'Afternoon') {
        outfit = 'Shirt';
        shoes = 'Moccasins';
    } else if (weatherTemp >= 10 && weatherTemp <= 18 && dayTime == 'Evening') {
        outfit = 'Shirt';
        shoes = 'Moccasins';
    }

    if (weatherTemp > 18 && weatherTemp <= 24 && dayTime == 'Morning') {
        outfit = 'Shirt';
        shoes = 'Moccasins';
    } else if (weatherTemp > 18 && weatherTemp <= 24 && dayTime == 'Afternoon') {
        outfit = 'T-Shirt';
        shoes = 'Sandals';
    } else if (weatherTemp > 18 && weatherTemp <= 24 && dayTime == 'Evening') {
        outfit = 'Shirt';
        shoes = 'Moccasins';
    }

    if (weatherTemp >= 25 && dayTime == 'Morning') {
        outfit = 'T-Shirt';
        shoes = 'Sandals';
    } else if (weatherTemp >= 25 && dayTime == 'Afternoon') {
        outfit = 'Swim Suit';
        shoes = 'Barefoot';
    } else if (weatherTemp >= 25 && dayTime == 'Evening') {
        outfit = 'Shirt';
        shoes = 'Moccasins';
    }
    console.log(`It's ${weatherTemp} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(['16','Morning']);
summerOutfit(['22','Afternoon']);