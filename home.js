function updateWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=Math.round(response.data.temperature.current);
    
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=response.data.city;
    temperatureElement.innerHTML= temperature;

    let descritpionElement=document.querySelector("#description");
    let description=response.data.condition.description;
    descritpionElement.innerHTML= description;

    let humidityElement=document.querySelector("#humidity");
    let humidity=`${response.data.temperature.humidity}%`;
    humidityElement.innerHTML=humidity;

    let windElement=document.querySelector("#wind-speed");
    let wind=`${response.data.wind.speed} km/h`;
    windElement.innerHTML=wind;
}

function searchCity(city){
    let apiKey="8d70acafft7fbf6e5eb3fdfd54o0f4e2";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(updateWeather)
    
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
}

let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Tehran");





