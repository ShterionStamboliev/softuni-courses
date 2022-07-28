function flightSchedule(arr) {
  let specificSector = arr.shift()
  let flightsStatuses = arr.shift();
  let flightStatus = arr.shift().toString();
  let planeDestination = [];

 for (let sectorName of specificSector) {
    let [flightName, destinationName] = sectorName.split(' ');
    let plane = {
        flightName,
        destinationName,
    };
    planeDestination.push(plane);
 }
  

  for (let destinationStatus of flightsStatuses) {
    let [flightName, status] = destinationStatus.split(" ");
    planeDestination.forEach(plane => {
      if (plane.flightName === flightName) {
        plane.status = status;
      }
    });
  }
  if (flightStatus === "Ready to fly") {
    planeDestination.forEach(plane => {
      if (plane.status !== 'Ready to fly') {
        plane.status = "Ready to fly";
        console.log(`{ Destination: '${plane.destinationName}', Status: '${plane.status}' }`);
      }
    });
  } else {
    planeDestination.forEach(plane => {
      if (plane.status) {
        console.log(`{ Destination: '${plane.destinationName}', Status: '${plane.status}' }`);
      }
    });
  }
}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]

);
