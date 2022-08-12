function workOrRestDay(input) {
    let workOrRest = input[0];

    if (workOrRest == 'Monday' || workOrRest == 'Tuesday' || workOrRest == 'Wednesday' || 
        workOrRest == 'Thursday' || workOrRest == 'Friday') {
        console.log('Working day');
    }  else if (workOrRest == 'Saturday' || workOrRest == 'Sunday') {
        console.log('Weekend');
    } else {
        console.log('Error');
    }
}
workOrRestDay(['Monday']);