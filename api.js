var apiKey = "AIzaSyDl6TTl_-BOQwVsEDTS5cZnA2kPvNyQRnA";
var settings = {
"url":
"https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" + apiKey,
"method": "GET",
};

$.ajax(settings).done(function (response){
    console.log(response);
});