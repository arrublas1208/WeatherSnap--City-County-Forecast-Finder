 const apiKey = "YOUR_API_KEY";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        async function checkWather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }else{
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";


            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "image/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "image/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "image/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "image/drizzie.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "image/mist.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
            }
            

    searchBtn.addEventListener("click", () =>{
        checkWather(searchBox.value);
    })
    checkWather();