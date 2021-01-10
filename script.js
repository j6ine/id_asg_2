const search = "";
const terms = ""; 
const limit = "";

/* function to return terms (parameter of api) */
$(".search-dropdown").change(function(e){
    var chosen = $(this).children(":selected").href();
    if (chosen=="#isbn"){
        terms = "isbn";
    }
    else if (chosen=="#part"){
        terms = "intitle";
    }
    else if (chosen=="#subject"){
        terms = "subject";
    }
    else if (chosen=="#author"){
        terms = "inauthor";
    }
    else if (chosen=="#publisher"){
        terms = "inpublisher";
    }
    else if (chosen=="#com-lib"){
        terms = "oclc";
    }
    else if (chosen=="#congress-lib"){
        terms = "lccn";
    }
    else{
        terms = "intitle";
    }
})


/* */
function bookSearch(){
    var search = $('.search-text').value;
    $('.search-result').innerHTML = ""

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",

        success: function(data){
            for(i=0;i<response.items.length;i++){
                title=$('<h5 class="center-align white-text">' + response.items[i].volumeInfo.title + '</h5>');  
                author=$('<h5 class="center-align white-text"> By:' + response.items[i].volumeInfo.authors + '</h5>');
                img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning">Read More</button></a>'); 	
                url= response.items[i].volumeInfo.imageLinks.thumbnail;
                img.attr('src', url);
                title.appendTo('#search-result');
                author.appendTo('#search-result');
                img.appendTo('#search-result');
            }
        },

        type: 'GET'
    });
}

for (var i = 0; i < searchBtn.length; i++) {
    searchBtn[i].addEventListener('click', bookSearch); 
 }
 
 