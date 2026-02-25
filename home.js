function refreshTemperature(response){

    console.log(response)
   
    let temperatureElement=document.querySelector("#temperature");
    let temperature=Math.round(response.data.temperature.current);
    temperatureElement.innerHTML=temperature;

    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=response.data.city;

    let descriptionElement=document.querySelector("#description");
    descriptionElement.innerHTML=response.data.condition.description;

    let humidityElement=document.querySelector("#humidity");
    humidityElement.innerHTML=`${response.data.temperature.humidity} %`;

    let windSpeedElment=document.querySelector("#wind-speed");
    windSpeedElment.innerHTML=`${response.data.wind.speed} km/h`;

    let date=new Date(response.data.time * 1000);
    let iconElement=document.querySelector("#icon");
    let timeElement=document.querySelector("#time");
    timeElement.innerHTML=formatDate(date);

    
    iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" class="weather-app-icon">`;

}

function showCity(city){

    let apiKey="8d70acafft7fbf6e5eb3fdfd54o0f4e2";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(refreshTemperature)
}

function handleSearchSubmit(event){
    event.preventDefault();

    let searchInputElement=document.querySelector("#search-form-input");
    showCity(searchInputElement.value)
}

function formatDate(date){

    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[date.getDay()];

    let hours=date.getHours();
    let minutes=date.getMinutes();
    if (minutes <10){
        minutes=`0${minutes}`
    }

    return `${day} ${hours}:${minutes}`
        
}
    

let searchForm=document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

showCity("Tehran");