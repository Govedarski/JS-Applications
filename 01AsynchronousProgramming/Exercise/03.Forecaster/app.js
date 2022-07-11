import {html, render} from 'https://unpkg.com/lit-html?module';
import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';

function attachEvents() {
    const symbolsMapping = {
        'Sunny': unsafeHTML('&#x2600'),
        'Partly sunny': unsafeHTML('&#x26C5'),
        'Overcast': unsafeHTML('&#x2601'),
        'Rain': unsafeHTML('&#x2614'),
        'Degrees': unsafeHTML('&#176'),
    };
    const getWeatherButton = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentForecastDiv = forecastDiv.querySelector('#current');
    const upcomingForecastDiv = forecastDiv.querySelector('#upcoming');
    const inputLocation = document.getElementById('location');
    const label = document.querySelector('#current .label')

    getWeatherButton.addEventListener('click', showWeather);

    async function showWeather() {
        label.textContent = 'Current conditions'
        forecastDiv.style.display = 'block';
        const location = await fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(response => response.json())
            .then(data => {
                const result = data.find(obj => obj.name === inputLocation.value)
                if(!result){
                    throw Error()
                }
                return result
            })
            .catch((err) => handelError(err));

        if (!location){
            return
        }

        fetch('http://localhost:3030/jsonstore/forecaster/today/' + location.code)
            .then(response => response.json())
            .then(data => renderCurrentForecast(data))
            .catch(err => handelError(err));

        fetch('http://localhost:3030/jsonstore/forecaster/upcoming/' + location.code)
            .then(response => response.json())
            .then(data => renderUpcomingForecast(data.forecast))
            .catch((err) => handelError(err));

    }


    function renderCurrentForecast(data) {
        const forecastInfo = (data) => html`
            <div class="forecasts">
            <span class="condition symbol">
                ${symbolsMapping[data.forecast.condition]}
            </span>
                <span class="condition">
                <span class="forecast-data">${data.name}</span>
                <span class="forecast-data">${data.forecast.low}${symbolsMapping.Degrees}/${data.forecast.high}${symbolsMapping.Degrees}</span>
                <span class="forecast-data">${data.forecast.condition}</span>
            </span>
            </div>
        `;
        let container = new DocumentFragment()
        render(forecastInfo(data), container);
        currentForecastDiv.appendChild(container)
    }

    function renderUpcomingForecast(forecasts) {
        const forecastInfo = (forecast) => html`
            <span class="upcoming">
                <span class="symbol">${symbolsMapping[forecast.condition]}</span>
                <span class="forecast-data">${forecast.low}${symbolsMapping.Degrees}/${forecast.high}${symbolsMapping.Degrees}</span>
                <span class="forecast-data" ${forecast.condition}</span>
            </span>
        `;

        const divForecastInfo = document.createElement('div');
        divForecastInfo.className = 'forecast-info';

        for (const forecast of forecasts) {
            const container = new DocumentFragment();
            render(forecastInfo(forecast), container);
            divForecastInfo.appendChild(container);
        }

        upcomingForecastDiv.replaceChildren(divForecastInfo);
    }

    function handelError(){
        label.textContent = 'Error'
        document.querySelector(`#current .forecasts`).remove()
        document.querySelector(`#upcoming .forecast-info`).remove()
    }
}

attachEvents();