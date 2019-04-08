$(document).ready(function () {

    $("#weatherBox").hide();

    // DISPLAY WEATHER WHEN USER CLICKS A CITY ON THE MAP

    // DISPLAY WEATHER WHEN USER TYPES A CITY AND PRESSES SUBMIT
    $("#submit").on("click", function () {

        var userCity = $("#cityInput").val();
        console.log(userCity);

        var APIKey = "4215e0176d12264a5f7d201c6130c2f9";

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&units=imperial&appid=" + APIKey;
        console.log(queryURL);

        $.ajax({
                url: queryURL,
                method: "GET",
            })

            .then(function (response) {
                console.log(response);
                console.log(queryURL);
                var userCity = $("#cityInput").val();
                $("#weatherCity").text(userCity);
                $("#temp").text("Current Temperature: " + response.main.temp + " F");
                $("#description").text("Cloud Coverage: " + response.clouds.all + " %");
                $("#wind").text("Wind Speed: " + response.wind.speed + " mph");

                $("#weatherBox").show();

            });

    })
});