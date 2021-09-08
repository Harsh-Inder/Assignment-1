
const weatherApi = {
    key: "6e32cefcd5f3b57b22cccc65b28f19d1",
    
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


const searchInputBox= document.querySelector('#input-box');


// Event Listner

searchInputBox.addEventListener('keypress' , function(event){

    if(event.keyCode === 13){
getWeatherReport(searchInputBox.value);
document.querySelector('.weather-body').style.display = "block";
    }
})





// get weather report

function getWeatherReport(city){
fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
.then(weather =>{
    return weather.json();
})

.then(showWeatherReport)

.catch(error);

}

// if wrong city name then everthing clear
function error(){
let city = document.getElementById('city');
city.innerText="INVALID CITY NAME";
    

const dates= document.getElementById('date');
const date = new Date();
dates.innerHTML = " ";

let temp= document.getElementById('temp');
temp.innerHTML= "";


let min_max= document.getElementById('min-max');
min_max.innerHTML= " "

let desc= document.getElementById('weather');
desc.innerHTML= " "

document.body.style.backgroundImage= "url(images/error.jpg)";

const h= document.getElementById('h1')
h.style.color="white";


}





// show weather report
function showWeatherReport(weather){
console.log(weather);


// for display of city
let city = document.getElementById('city');
// city.innerText= weather.name + " , " + weather.sys.country;
city.innerText= `${weather.name}, ${weather.sys.country}`



// for display of date
const dates= document.getElementById('date');
const date = new Date();
dates.innerHTML = date.toDateString();



// for temp now
let temp= document.getElementById('temp');
temp.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;

// for min max temp
let min_max= document.getElementById('min-max');
min_max.innerHTML= `${Math.round(weather.main.temp_min)}&deg;C (min) / ${Math.round(weather.main.temp_max)}&deg;C (max) `;


// for description
let desc= document.getElementById('weather');
desc.innerHTML= `${weather.weather[0].main}`;


// background images!
if(desc.textContent == 'Rain'){
document.body.style.backgroundImage = "url(images/rain.jpg)";
const h= document.getElementById('h1')
h.style.color="black";
}

else if(desc.textContent == "Thunderstorm"){
    document.body.style.backgroundImage= "url(images/thunderstorm.jpg)";
    const h= document.getElementById('h1')
    h.style.color="white";
}

else if(desc.textContent == "Mist"){
    document.body.style.backgroundImage= "url(images/mist.jpg)";
    const h= document.getElementById('h1')
    h.style.color="black";
}

else if(desc.textContent == "Drizzle"){
    document.body.style.backgroundImage= "url(images/drizzle.jpg)";
    const h= document.getElementById('h1')
    h.style.color="black";
}

else if(desc.textContent == "Snow"){
    document.body.style.backgroundImage= "url(images/snow.jpg)";
    const h= document.getElementById('h1')
    h.style.color="black";
}

else if(desc.textContent == "Clear"){
    document.body.style.backgroundImage= "url(images/clear.jpg)";
    const h= document.getElementById('h1')
    h.style.color="black";
}

else if(desc.textContent == "Clouds"){
    document.body.style.backgroundImage= "url(images/cloud.jpg)";
    const h= document.getElementById('h1')
    h.style.color="black";
}

else if(desc.textContent == "Haze"){
    document.body.style.backgroundImage= "url(images/haze.jpg)";
    const h= document.getElementById('h1')
    h.style.color="black";
    
}

else if(desc.textContent == "Smoke"){
    document.body.style.backgroundImage= "url(images/smoke.jpg)";
    const h= document.getElementById('h1')
    h.style.color="white";
}


}






