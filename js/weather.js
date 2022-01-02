const API_KEY = "44bc68d3de4fbe8c71dec61ab4cef0e7"
const feelLikeDisplay = document.querySelector(".feel-like>span");
const windDisplay =  document.querySelector(".wind>span");
const weatherDisplay= document.querySelector(".weather > img");
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature>span");
const weatherSelect= document.querySelector("#weather-select");
const info = document.querySelector(".info");

weatherSelect.addEventListener("change", (e)=>{
    console.log(e.target.value)
    getWeather(e.target.value)
})

//async await 하단의 코드가 실행되기까지 잠시기다려주는 명령어
const getWeather = async (city = 'seoul')=>
{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await axios.get(url);

const{name, main, weather, wind} = response.data;
    locationDisplay.innerText = name;
    temperatureDisplay.innerText= transferTemperature(main.temp);
    weatherDisplay.setAttribute('src',`http://openweathermap.org/img/wn/${weather[0].icon}.png`);
    windDisplay.innerText = wind.speed;
    feelLikeDisplay.innerText = transferTemperature(main.feels_like);
    console.log(response)
}



const transferTemperature = (temp)=>
{
return (temp-273.15).toFixed(1);
}
getWeather()
