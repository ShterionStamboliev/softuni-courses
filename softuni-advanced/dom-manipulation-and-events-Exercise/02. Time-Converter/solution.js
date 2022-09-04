function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');
    const days = document.getElementById('days')
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')

    daysBtn.addEventListener('click', convert);
    hoursBtn.addEventListener('click', convert);
    minutesBtn.addEventListener('click', convert);
    secondsBtn.addEventListener('click', convert);

    const time = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function timeConvert(value, prop) {
        let days = value / time[prop];
        return {
            days: days,
            hours: days * time.hours,
            minutes: days * time.minutes,
            seconds: days * time.seconds,
        }
    }
    function convert(event) {
        let inputField = event.target.parentElement.querySelector('input')
        let timeField = timeConvert(Number(inputField.value), inputField.id);
        days.value = timeField.days;
        hours.value = timeField.hours;
        minutes.value = timeField.minutes;
        seconds.value = timeField.seconds;
    }
}


// let sec = 86400;
// let min = sec / 60;
// let hrs = 22;
// let min = hrs / 24