function attachEvents() {
    const weatherBtn = document.getElementById('submit');
    const location = document.getElementById('location');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');
    const weatherConditions = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain':  '☂',
        'Degree': '°'
    };

    weatherBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const data = await response.json();
        const city = data.find(({ name }) => name === location.value);
        const cityCode = city.code;
        const currentConditions = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`);
        const currentConditionsData = await currentConditions.json();
        const threeDayForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`);
        const threeDayData = await threeDayForecast.json();

        forecastDiv.style.display = 'block';
        const divForecasts = elements('div', 'forecasts', '', currentDiv);
        elements('span', 'condition symbol', weatherConditions[currentConditionsData.forecast.condition], divForecasts);
        const spanForecasts = elements('span', 'condition', '', divForecasts);
        elements('span', 'forecast-data', currentConditionsData.name, spanForecasts);
        elements('span', 'forecast-data', `${currentConditionsData.forecast.low}${weatherConditions.Degree}/${currentConditionsData.forecast.high}${weatherConditions.Degree}`, spanForecasts);
        elements('span', 'forecast-data', `${currentConditionsData.forecast.condition}`, spanForecasts);
        const divUpcoming = elements('div', 'forecast-info', '', upcomingDiv);
        const spanUpcomingFirst = elements('span', 'upcoming', '', divUpcoming);
        const spanUpcomingSecond = elements('span', 'upcoming', '', divUpcoming);
        const spanUpcomingThird = elements('span', 'upcoming', '', divUpcoming);
        elements('span', 'symbol', weatherConditions[threeDayData.forecast[0].condition], spanUpcomingFirst);
        elements('span', 'forecast-data', `${threeDayData.forecast[0].low}${weatherConditions.Degree}/${threeDayData.forecast[0].high}${weatherConditions.Degree}`, spanUpcomingFirst);
        elements('span', 'forecast-data', `${threeDayData.forecast[0].condition}`, spanUpcomingFirst);
        elements('span', 'symbol', weatherConditions[threeDayData.forecast[1].condition], spanUpcomingSecond);
        elements('span', 'forecast-data', `${threeDayData.forecast[1].low}${weatherConditions.Degree}/${threeDayData.forecast[1].high}${weatherConditions.Degree}`, spanUpcomingSecond);
        elements('span', 'forecast-data', `${threeDayData.forecast[1].condition}`, spanUpcomingSecond);
        elements('span', 'symbol', weatherConditions[threeDayData.forecast[2].condition], spanUpcomingThird);
        elements('span', 'forecast-data', `${threeDayData.forecast[2].low}${weatherConditions.Degree}/${threeDayData.forecast[2].high}${weatherConditions.Degree}`, spanUpcomingThird);
        elements('span', 'forecast-data', `${threeDayData.forecast[2].condition}`, spanUpcomingThird);

        if (!city) {
            throw new Error();
        }
        } catch (err) {
            forecastDiv.style.display = 'block';
            forecastDiv.innerHTML = 'Error';
        }
    });

    function elements(type, className, text, parent) {
        const element = document.createElement(type);
        if (className) {
            element.setAttribute('class', className);
        }
        if (text) {
            element.textContent = text;
        }
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}
attachEvents();