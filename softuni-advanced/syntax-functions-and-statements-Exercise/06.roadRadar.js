function roadRadar(currentSpeed, currentArea) {
    let areas = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20, 
    }
    
    let status = '';
    let difference = Math.abs(currentSpeed - areas[currentArea]);

    if (currentSpeed <= areas[currentArea]) {
        console.log(`Driving ${currentSpeed} km/h in a ${areas[currentArea]} zone`);
        
    } else if (difference <= 20) {
        status = 'speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areas[currentArea]} - ${status}`);
    } else if (difference <= 40) {
        status = 'excessive speeding';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areas[currentArea]} - ${status}`);
    } else {
        status = 'reckless driving';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areas[currentArea]} - ${status}`);
    }       
}
roadRadar(40, 'city');