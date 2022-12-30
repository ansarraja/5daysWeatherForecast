var APIKey = "ee829a9ece259324331f53d0aeee1ead";
var previousCitySearched;
var storedCities;
var cities = [];
var currentDate = moment().format("L");
// search for a city and store in local storage
$("#search-button").on("click", function (event) {
	event.preventDefault();
	// get value of city input
	var city = $("#search-input").val();
	console.log(city);

	var queryURL1 =
		"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

	$.ajax({
		url: queryURL1,
		method: "GET",
	}).then(function (response) {
		console.log(response);
		// push city input to cities array
		cities.push(city);
		//store cities in localStorage
		localStorage.setItem("cities", JSON.stringify(cities));

		var cityItem = $("<li>");
		cityItem.addClass("list-group-item city-item");
		cityItem.text(response.name);
		cityItem.attr("lat", response.coord.lat);
		cityItem.attr("lon", response.coord.lon);
		$("#history").prepend(cityItem);
		$(".card-title").text(`${response.name}  (${currentDate})  `);
		var weatherIcon = $("<img>");
		var iconCode = response.weather[0].icon;
		var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
		weatherIcon.attr("src", iconUrl);
		$(".card-title").append(weatherIcon);
		var temp = (response.main.temp - 273.15).toFixed(2);
		$("#temperature").text(`Temperature: ${temp} \xB0C`);
		$("#humidity").text(`Humidity: ${response.main.humidity}%`);
		$("#wind-speed").text(`Wind Speed: ${response.wind.speed} MPH`);

	});
});