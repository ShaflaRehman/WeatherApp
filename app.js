url = 'https://api.openweathermap.org/data/2.5/weather?q=';

button = document.querySelector('form button');
let city_title = document.querySelector('.city p');
let temp_title = document.querySelector('.temp_value');
let feelslike = document.querySelector('.feels_like');
let humidity = document.querySelector('.hum p');
let wind = document.querySelector('.ws p');
let img_icon = document.querySelector('.cti img');





document.addEventListener('DOMContentLoaded', async function () {
    let city_name = 'gujranwala';
    console.log(city_name);
    current_url = `${url}${city_name.toLowerCase()}&units=metric&appid=456c1f0794253cf4b74765475bebc9d6`;
    let promise = await fetch(current_url);

    let response = await promise.json();
    if (response.cod == '404') {
        city_title.innerHTML = 'city not found';
        temp_title.innerHTML = wind.innerHTML = humidity.innerHTML = '';
        feelslike.innerHTML = '';

    }
    else {
        console.log(response);
        console.log(response.main.temp);
        city_title.innerHTML = response.name;

        temp_title.innerHTML = `${Math.round(response.main.temp)}<sup>o</sup>C`;

        feelslike.innerHTML = `Feels like ${Math.round(response.main.feels_like)}<sup>o</sup>C`;
        wind.innerHTML = `${response.wind.speed}km/hr`;
        humidity.innerHTML = `${response.main.humidity}%`;
        let icon = response.weather[0].icon;
        console.log(icon);
        img_icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
});





button.addEventListener('click', async function (evt) {
    evt.preventDefault();
    let city_name = document.querySelector('form input').value;
    console.log(city_name);
    current_url = `${url}${city_name.toLowerCase()}&units=metric&appid=456c1f0794253cf4b74765475bebc9d6`;
    let promise = await fetch(current_url);
   
    let response = await promise.json();
    if (response.cod == '404') {
        city_title.innerHTML = 'city not found';
        temp_title.innerHTML = wind.innerHTML = humidity.innerHTML = '';
        feelslike.innerHTML = '';

    }
    else {


        console.log(response);
        console.log(response.main.temp);
        city_title.innerHTML = response.name;

        temp_title.innerHTML = `${Math.round(response.main.temp)}<sup>o</sup>C`;

        feelslike.innerHTML = `Feels like ${Math.round(response.main.feels_like)}<sup>o</sup>C`;
        wind.innerHTML = `${response.wind.speed}km/hr`;
        humidity.innerHTML = `${response.main.humidity}%`;
        let icon = response.weather[0].icon;
        console.log(icon);
        img_icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }

});







