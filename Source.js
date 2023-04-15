const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8d9c1b543msh4b43e3eaaa5ba56p1d0680jsn48baa7c58845',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather= (city)=>{

cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {



		console.log(response)


		cloud_pct.innerHTML = response.cloud_pct

		temp.innerHTML = response.temp

		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		
	})
	.catch(err => console.error(err));
}
{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then((response) => {



		console.log(response)


		cloud_pct2.innerHTML = response.cloud_pct
				
		// temp.innerHTML = response.temp

		temp3.innerHTML = response.temp
		feels_like2.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		wind_speed3.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		
	})
	.catch(err => console.error(err));
}

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jamshedpur', options)
	.then(response => response.json())
	.then((response) => {



		console.log(response)


		cloud_pct3.innerHTML = response.cloud_pct
				
		// temp.innerHTML = response.temp

		temp4.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		wind_speed4.innerHTML = response.wind_speed
		
	})

	.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Arizona', options)
	.then(response => response.json())
	.then((response) => {



		console.log(response)


		cloud_pct4.innerHTML = response.cloud_pct
				
		// temp.innerHTML = response.temp

		temp5.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		wind_speed5.innerHTML = response.wind_speed
		
	})
	.catch(err => console.error(err));

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather ("Delhi")