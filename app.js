
 
function showWeather(){
    const apiKey = "c6ca9fa8e76eddbf72ad363ccf3a5e0d";
    const cityBaseURL = "https://api.openweathermap.org/geo/1.0/direct?q=";
    
    const typedCity=document.getElementById("city-input").value;

    const promise = $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather?q='+typedCity+'&appid='+apiKey
    });
    
    promise.then(
      (data) => {
      console.log(data);
       document.getElementById ("apiHumidity").innerHTML=data.main.humidity;
       document.getElementById ("description").innerHTML=data.weather[0].main;
       document.getElementById ("apiTemperature").innerHTML=data.main.temp_max;
       document.getElementById ("city").innerHTML=typedCity;
      },
      (error) => {
       console.log('bad request: ', error);
      }
    );
}

