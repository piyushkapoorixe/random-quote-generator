$(document).ready(function() {

	$.getJSON('https://thesimpsonsquoteapi.glitch.me/quotes', function(data){
console.log(data) //FOR JSON DATA
var quote = "";
var character = "";
quote = data[0].quote;
character = data[0].character;
console.log(quote);
console.log(character);
$("#text").html(quote);
$("#author").html(character);
$("a").attr("href", "https://twitter.com/intent/tweet/" + encodeURIComponent(data.quote)); //Not Work because of invalid url for twitter
});

	$("#new-quote").on("click", function() {

		$.getJSON('https://thesimpsonsquoteapi.glitch.me/quotes', function(data){
//console.log(data) //FOR JSON DATA
var quote = "";
var character = "";
quote = data[0].quote;
character = data[0].character;
console.log(quote);
console.log(character);
$("#text").html(quote);
$("#author").html(character);
$("a").attr("href", "https://twitter.com/intent/tweet/" + encodeURIComponent(data.quote));
});
		});
	
});