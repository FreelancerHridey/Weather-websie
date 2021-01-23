

document.getElementById("search").addEventListener('click',()=>{
    const inputValue = document.getElementById('inputValue').value;
    const cityName = document.getElementById('cityName');
    const temp = document.getElementById('Temp');
    const WeatherName = document.getElementById('WeatherName');
    const WeatherIcon = document.getElementById("icon");
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=14c51dd3cdc15b00afac5c71c3ae922e')
    .then(res => res.json())
    .then(data => {
        const Name = data.name;
        const Temp = data.main.temp;
        const tempToCel = parseFloat(Temp -273.15);
        const weather = data.weather[0].main;
        const Icon = data.weather[0].icon+ ".png"; 
        console.log(data);
        WeatherIcon.src = "https://openweathermap.org/img/wn/" + Icon;
        cityName.innerText = Name;
        temp.innerText = tempToCel.toFixed(2)
        WeatherName.innerText = weather;
    })
    .catch(error => {
        alert("Please enter valid city name");
    })
})
    
