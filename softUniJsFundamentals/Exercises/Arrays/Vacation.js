function vacation(group, type, week){
    
    let price = 0;

    if (type === 'Students') {
        switch (week) {
            case 'Friday': price = group * 8.45; break;
            case 'Saturday': price = group * 9.80; break;
            case 'Sunday': price = group * 10.46; break;
        }
        if (group >= 30) {
            price *= 0.85;
        }
    }

     else if (type === 'Business') {
        if (group >= 100) {
            switch (week) {
                case 'Friday': price = (group - 10) * 10.90; break;
                case 'Saturday': price = (group - 10) * 15.60; break;
                case 'Sunday': price = (group - 10) * 16.00; break;
            }
        } else {
            switch (week) {
                case 'Friday': price = group * 10.90; break;
                case 'Saturday': price = group * 15.60; break;
                case 'Sunday': price = group * 16.00; break;
            }
        }
    } else if (type === 'Regular') {
        switch (week) {
            case 'Friday': price = group * 15; break;
            case 'Saturday': price = group * 20; break;
            case 'Sunday': price = group * 22.50; break;
        }
        if (group >= 10 && group <= 20) {
            price *= 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday")

