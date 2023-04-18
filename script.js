const inputBox = document.querySelector('.input-box');
const searchBtn =document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const tempereture = document.querySelector('.tempereture');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found')
const wether_body = document.querySelector('.wether-body');

async function checkWeather(city) {
    const api_key = "31fb3e6fea223977922932e036db3e9d";
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weather_data = await fetch(`${url}`).then(response => response.json());

    // image not found
    if(weather_data.cod ===`404`) {
        location_not_found.style.display = "flex"; 
        wether_body.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none"; 
    wether_body.style.display = "flex";
    
    tempereture.innerHTML = `${Math.round (weather_data.main.temp - 273.15)}°C`;
    // console.log(weather_data);

    description.innerHTML =`${ weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;

    switch(weather_data.weather[0].main) {
        case `Clouds`:
            weather_img.src = "./cloud.png";
            break;
        case `Clear`:
            weather_img.src = "./clear.png";
            break;            
        case `Rain`:
            weather_img.src = "./rain.png";
            break;
        case `Mist`:
            weather_img.src = "./mist.png";
            break;
        case `Snow`:
            weather_img.src = "./snow.png";
            break;
    
    }


}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
