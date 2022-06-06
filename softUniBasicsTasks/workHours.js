function workHours(input) {
    const hours = Number(input[0]);
    const days = input[1];

    if (days == 'Monday' || days == 'Tuesday' || days == 'Wednesday' || days == 'Thursday' || days == 'Friday' || days == 'Saturday') {
      if (hours == 10 || hours <= 18)
      console.log('open');
  } else if (hours > 18 && days == 'Monday' || days == 'Tuesday' || days == 'Wednesday' || days == 'Thursday' || days == 'Friday' || days == 'Saturday' || days == 'Sunday') {
        console.log('closed');
  }
}

workHours(['19','Friday']);