var APIKey = "ee829a9ece259324331f53d0aeee1ead";
var previousCitySearched;
var storedCities;
var cities = [];
var currentDate = moment().format("DD/MM/YYYY");
// search for a city and store in local storage
$("#search-button").on("click", function (event) {
	event.preventDefault();
	// get value of city input
	var city = $("#search-input").val();
	console.log(city);

	var queryURL1 =
		"https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

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
		cityItem.text(response.city.name);
		cityItem.attr("lat", response.city.coord.lat);
		cityItem.attr("lon", response.city.coord.lon);
		$("#history").prepend(cityItem);

		// reterieve current day weather forcast
		$(".card-title").text(`${response.city.name}  (${currentDate})  `);
		var weatherIcon = $("<img>");
		var iconCode = response.list[0].weather[0].icon;
		var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
		weatherIcon.attr("src", iconUrl);
		$(".card-title").append(weatherIcon);
		var temp = (response.list[0].main.temp - 273.15).toFixed(2);
		$("#temperature").text(`Temperature: ${temp} \xB0C`);
		$("#humidity").text(`Humidity: ${response.list[0].main.humidity}%`);
		$("#wind-speed").text(`Wind Speed: ${response.list[0].wind.speed} MPH`);


		// 5 days weather forcast
		//day 1 at index 6
		var date1 = response.list[6].dt_txt;
		date1 = moment(date1).format("DD/MM/YYYY");
		$(".card-title1").text(date1);
		var weatherIcon1 = $("<img>");
		var iconCode1 = response.list[6].weather[0].icon;
		var iconUrl1 = "http://openweathermap.org/img/wn/" + iconCode1 + ".png";
		weatherIcon1.attr("src", iconUrl1);
		$(".card-title1").append(weatherIcon1);
		var temp1 = (response.list[6].main.temp - 273.15).toFixed(2);
		$("#temperature1").text(`Temperature: ${temp1} \xB0C`);
		$("#humidity1").text(`Humidity: ${response.list[6].main.humidity}%`);
		$("#wind-speed1").text(`Wind Speed: ${response.list[6].wind.speed} MPH`);


		//day 2
		var date2 = moment(response.list[14].dt_txt).format("DD/MM/YYYY");
		$(".card-title2").text(date2);
		var weatherIcon2 = $("<img>");
		var iconCode2 = response.list[14].weather[0].icon;
		var iconUrl2 = "http://openweathermap.org/img/wn/" + iconCode2 + ".png";
		weatherIcon2.attr("src", iconUrl2);
		$(".card-title2").append(weatherIcon2);
		var temp2 = (response.list[14].main.temp - 273.15).toFixed(2);
		$("#temperature2").text(`Temperature: ${temp2} \xB0C`);
		$("#humidity2").text(`Humidity: ${response.list[14].main.humidity}%`);
		$("#wind-speed2").text(`Wind Speed: ${response.list[14].wind.speed} MPH`);


		//day 3
		var date3 = moment(response.list[22].dt_txt).format("DD/MM/YYYY");
		$(".card-title3").text(date3);
		var weatherIcon3 = $("<img>");
		var iconCode3 = response.list[22].weather[0].icon;
		var iconUrl3 = "http://openweathermap.org/img/wn/" + iconCode3 + ".png";
		weatherIcon3.attr("src", iconUrl3);
		$(".card-title3").append(weatherIcon3);
		var temp3 = (response.list[22].main.temp - 273.15).toFixed(2);
		$("#temperature3").text(`Temperature: ${temp3} \xB0C`);
		$("#humidity3").text(`Humidity: ${response.list[22].main.humidity}%`);
		$("#wind-speed3").text(`Wind Speed: ${response.list[22].wind.speed} MPH`);


		//day 4
		var date4 = moment(response.list[30].dt_txt).format("DD/MM/YYYY");
		$(".card-title4").text(date4);
		var weatherIcon4 = $("<img>");
		var iconCode4 = response.list[30].weather[0].icon;
		var iconUrl4 = "http://openweathermap.org/img/wn/" + iconCode4 + ".png";
		weatherIcon4.attr("src", iconUrl4);
		$(".card-title4").append(weatherIcon4);
		var temp4 = (response.list[30].main.temp - 273.15).toFixed(2);
		$("#temperature4").text(`Temperature: ${temp4} \xB0C`);
		$("#humidity4").text(`Humidity: ${response.list[30].main.humidity}%`);
		$("#wind-speed4").text(`Wind Speed: ${response.list[30].wind.speed} MPH`);


		//day 5
		var date5 = moment(response.list[38].dt_txt).format("DD/MM/YYYY");
		$(".card-title5").text(date5);
		var weatherIcon5 = $("<img>");
		var iconCode5 = response.list[38].weather[0].icon;
		var iconUrl5 = "http://openweathermap.org/img/wn/" + iconCode5 + ".png";
		weatherIcon5.attr("src", iconUrl5);
		$(".card-title5").append(weatherIcon5);
		var temp5 = (response.list[38].main.temp - 273.15).toFixed(2);
		$("#temperature5").text(`Temperature: ${temp5} \xB0C`);
		$("#humidity5").text(`Humidity: ${response.list[38].main.humidity}%`);
		$("#wind-speed5").text(`Wind Speed: ${response.list[38].wind.speed} MPH`);

	});

});

