/* performing a search - future implement: concat eg. q=blah+intitle:blah+subject:
var seacrh = 
var searchBy = ["byIsbn", "byAuthor", "byName", "byPart", "by"]
var searchby = ["intitle:", "inauthor:", "inpublisher:", "subject:", "isbn:", "lccn:", "oclc:"]

if 

else if


"https://www.googleapis.com/books/v1/volumes?q=" + searchBy + search



*/


/* */

/* */

/* */

/* */

/* */

/* */

function bookSearch(){
    var search = $('.search-text').value;
    $('.search-result').innerHTML = ""

    console.log(search)

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?=" + search,
        dataType: "json",

        success: function(data){
            console.log(data)
        },

        type: 'GET'
    });
}


var searchBtn = document.getElementsByClassName('search-btn');

for (var i = 0; i < searchBtn.length; i++) {
    searchBtn[i].addEventListener('click', bookSearch); 
 }
 
 
