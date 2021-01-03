$(document).ready(function(){	

  $("#searchForm").submit(function(){

    var search = $(".searchInput").val();
    if(search == "")
    {
      alert("Please enter something in the field");
    }

    else
    {		
      var url = "";
      var img = "";
      var title = "";
      var author = "";
      var bttn = "";

      $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){
        for(i=0;i<response.items.length;i++)
        {
          title=$('<h5 class="card-title">' + response.items[i].volumeInfo.title + '</h5>');  
          author=$('<p class="card-text"> By:' + response.items[i].volumeInfo.authors + '</p>');
          img = $('<a href="#" class="btn btn-primary">Read More' + response.items[i].volumeInfo.infoLink + '</a>'); 	
          url= response.items[i].volumeInfo.imageLinks.thumbnail;
          img.attr('src', url);

          title.appendTo('#cardResult.card-body');
          author.appendTo('#cardResult.card-body');
          img.appendTo('#cardResult.card-body');

          <img class="card-img-top" src="" alt="Card image cap"></img>
        }

      });
      
    }
    
    return false;
  });

});