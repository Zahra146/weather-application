// function updateTemperature(response){
//     let temperatureElement=document.querySelector("#temperature");
//     let temperature=Math.round(response.data.temperature.current)    
//     temperatureElement.innerHTML=temperature;    
// }

// function searchCity(city){
//     let apiKey="8d70acafft7fbf6e5eb3fdfd54o0f4e2";
//     let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(updateTemperature);
// }

// function search(event){
//     event.preventDefault();
//     let searchInput=document.querySelector("#search-form-input");
//     let cityElement=document.querySelector("#city");
//     cityElement.innerHTML=(searchInput.value);
//     searchCity(searchInput.value);   
// }

// let searchFormElement=document.querySelector("#search-form");
// searchFormElement.addEventListener("submit", search);

// function formatDate(date){

    
//     let hours=date.getHours();    
//     let minutes=date.getMinutes();
//     if (minutes<= 0){
//     minutes=`0${minutes}`
// }
//     let day=date.getDay();
//     let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     let formattedDay=days[day];

//     let currentDateElement=document.querySelector("#time");    
//     currentDateElement.innerHTML=`${formattedDay}, ${hours}:${minutes}`
//     }
// let date= new Date();




