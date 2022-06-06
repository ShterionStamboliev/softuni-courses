function trip(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let holidayType = '';

    switch(season) {
        case 'summer':
            if (budget <= 100) {
                destination = 'Bulgaria';
                holidayType = 'Camp';
                budget *= 0.30;
            } else if (budget <= 1000) {
                destination = 'Balkans';
                holidayType = 'Camp';
                budget *= 0.40;
            }
            break;

        case 'winter':
            if (budget <= 100) {
                destination = 'Bulgaria';
                holidayType = 'Hotel';
                budget *= 0.70;
            } else if (budget <= 1000) {
                destination = 'Balkans';
                holidayType = 'Hotel';
                budget *= 0.80;
            }
            break;
        }

        if (budget > 1000) {
            destination = 'Europe';
            holidayType = 'Hotel';
            budget *= 0.90;
        }
        console.log(`Somewhere in ${destination}`);
        console.log(`${holidayType} - ${budget.toFixed(2)}`);     
    }
trip(['50','summer']);
trip(['75','winter']);
trip(['312','summer']);
trip(['678.53','winter']);
trip(['1500','summer']);
