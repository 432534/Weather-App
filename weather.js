const apikey ="b9b167e253f76c4cf456824465a54d39";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".icon input");
const searchbtn=document.querySelector(".icon button");
const weather=document.querySelector(".weather-icon");
async function checkWeather(city)
{
    const response=await fetch(apiUrl +city+`&appid=${apikey}`);
    var data =await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    if(data.weather[0].main =="Clouds")
    {
        weather.src="clous.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weather.src="drizzle.png"
    }
    else if(data.weather[0].main=="Clear")
    {
        weather.src="clear.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        weather.src="mist.png"
    }
    else if(data.weather[0].main=="Snow")
    {
        weather.src="snow.png"
    }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
checkWeather();
$('#btn').click(function(){
    $('.weather').toggle(1000);
  });
  $('#btn1').click(function(){
    $('.weather').fadeToggle(1000);
  });
  $('#btn2').click(function(){
    $('.weather').slideToggle(1000);
  });