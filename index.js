function displayTemperature(response){

    console.log(response)

}


function search(event){
    event.preventDefault();
    let city=document.querySelector("#search-form-input");
    let heading=document.querySelector("#city");
    heading.innerHTML=(city.value);
    let apiKey="8d70acafft7fbf6e5eb3fdfd54o0f4e2";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    

axios.get(apiUrl).then(displayTemperature);
}

let form=document.querySelector("#search-form");
form.addEventListener("submit", search);



let currentDate=new Date();
let minutes=currentDate.getMinutes();
let hours=currentDate.getHours();
let day=currentDate.getDay();
let days=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let formattedDay=days[day];

let currentTime=document.querySelector("#time");
currentTime.innerHTML="";