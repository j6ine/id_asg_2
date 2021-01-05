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

document.getElementsByClassName('search-btn').addEventListener('click', bookSearch, false);