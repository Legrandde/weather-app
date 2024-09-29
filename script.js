// let xhr = new XMLHttpRequest();
// xhr.open("GEt", url);
// xhr.responseType == "json";
// xhr.send();

// xhr.onload = fonction ()
// {
//     if(xhr.readyState === XMLHttpRequest.DONE){
//         if(xhr.status === 200){
//             let reponse = xhr.response;
//         }
//     }
// }

const APIKey = "a75a57233213dfa5418b7dda71cb95f0";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".status");

const btn =document.querySelector(".search-btn");
btn.addEventListener('click', function(){
    document.querySelector(".weather-content").style.display= "block";
    const city = document.querySelector(".input-field").value;
    checkWeathear(city);
    
})

async function checkWeathear(city) {
    
    const response = await fetch(APIURL +city+ `&appid=${APIKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) +`°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity+ `%`
    document.querySelector(".wind").innerHTML = data.wind.speed+ ` km/h`;
    console.log(data)
    switch(data.weather[0].main){
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "clear":
            weatherIcon.src = "images/humidity.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        default:
            break;
    }
}


