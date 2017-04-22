// - Create an array with the following values: 
//"NYC", "SF", "LA", "ATX", "SYD";

var city = ["NYC", "SF", "LA", "ATX", "SYD"];
var index
// use a```for``` loop in JavaScript to loop through them
for (index = 0; index < city.length; index = index +1){
	console.log(city[index]);

// - Use `$.append()` in your loop (from above) to populate the `<select>`drop-down menu 
	$("select").append("<option>"+city[index]+"</option>");
}
// - When the user changes the input of the drop-down, update the background image based on what they selected
// - Use the ```$.change``` event handler to capture user actions

$("form").on("change","#city-type",
 function(){
 	console.log("changing city");

 // - Get the value of user input using ```$.val()```
 	var city = $("#city-type").val()

if (city == "NYC" || city =="ny"|| city =="nyc" || city == "New York" || city == "New York City" || city == "new york city"){

// - Use the ```$.attr()``` function to update html classes 
	   $('body').attr('class','nyc');

// - Use ```if/else if/else ``` conditionals to control the flow of your application
	    } else if (city == "SF" || city == "sf" || city =="san fran" || city == "San Fran" || city == "San Francisco") {      
           $('body').attr('class','sf');
        } else if (city == "LA" || city =="la" || city =="los angeles" || city == "Los Angeles" || city == "LAX") {      
           $('body').attr('class','la');
        } else if (city == "AUS" || city =="austin" || city == "Austin" || city == "Austin Texas" || city == "ATX") {      
           $('body').attr('class','austin');
        } else if (city == "SYD" || city =="sydney" || city == "Sydney") {      
           $('body').attr('class','sydney');
       }

});

