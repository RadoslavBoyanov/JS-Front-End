function attachEvents() {
    document
        .querySelector('#submit')
        .addEventListener("click", getWeatherData);


}

const weatherSymbols = {
    'Sunny': '☀',
    'Partly Sunny': "&#x26C5",
    'Overcast': '☁',
    'Rain': '☂',
}

async function getWeatherData() {
    const inputLocation = document.querySelector('#location').value;
    const response = await (await fetch('http://localhost:3030/jsonstore/forecaster/locations')).json();

    const location = response.find(l => l.name.toLowerCase() === inputLocation);

    const [currentConditions, upcomingWeather] = await Promise.all([getCurrentConditions(location.code), getUpcomingWeather(location.code)]);

    document.getElementById('forecast').style.display = 'block';

    document
        .querySelector('#current')
        .appendChild(createCurrentWeatherContainer(currentConditions));

    document
        .querySelector('#upcoming')
        .appendChild(createUpcomingWeatherContainer(upcomingWeather));
}

async function getCurrentConditions(code){
    
    const currentConditionResponse = await (
        await fetch(
            `http://localhost:3030/jsonstore/forecaster/today/${code}`
        )
    ).json();
    return currentConditionResponse;
}

async function getUpcomingWeather(code){
    const threeDayForecastResponse = await (
        await fetch(
            `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
        )
    ).json();
    return threeDayForecastResponse;
}

function createUpcomingWeatherContainer(forecast) {
    const upcomingForecastContainer = document.createElement('div');
    upcomingForecastContainer.classList.add('forecast-info');


    forecast.forecast.forEach(data => {
        const element = document.createElement('div');
        element.classList.add('upcoming');
        element.appendChild(
            createForecastElement(weatherSymbols[data.condition]),
            'symbol'
        );
        element.appendChild(
            createForecastElement(
                `${data.low}°/${data.high}`,
                'forecast-data'
            )
        );
        element.appendChild(
            createForecastElement(
                data.condition, 'forecast-data'
            )
        );

        upcomingForecastContainer.appendChild(element);
    });

    return upcomingForecastContainer;
}

function createCurrentWeatherContainer(forecast) {

    const currentWeatherContainer = document.createElement('div');
    currentWeatherContainer.classList.add('forecasts');

    currentWeatherContainer.appendChild(createForecastElement(
        weatherSymbols[forecast.forecast.condition],
        'condition',
        'symbol'
    ));
    currentWeatherContainer.appendChild(createForecastDataContainer(forecast));
    return currentWeatherContainer;
}

function createForecastDataContainer(forecast) {
    const conteiner = document.createElement('span');
    conteiner.classList.add('condition');

    conteiner.appendChild(
        createForecastElement(
            forecast.name,
            'forecast-data'
        ));

    conteiner.appendChild(
        createForecastElement(
            `${forecast.forecast.low}°/${forecast.forecast.high}`,
            'forecast-data'
        ));

    conteiner.appendChild(
        createForecastElement(
            weatherSymbols[forecast.forecast.condition],
            'forecast-data'
        )
    );

    return conteiner;
}

function createForecastElement(textContent, ...classes) {
    const forecastElement = document.createElement('span');
    forecastElement.textContent = textContent;
    forecastElement.classList.add(...classes);

    return forecastElement;
}

attachEvents();