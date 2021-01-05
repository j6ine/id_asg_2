$(document).ready(function(){
    $('.search-btn').submit(function(){
        var search = $('.search-text').val;

        if (search == '')
        {
            alert("Please enter something in the field first.");
        }

        else{
            var url ='';
            var img ='';
            var title ='';
            var author =''
            
            $.get("https://www.googleapis.com/books/v1/volumes?=" + search){
                
            }
        }
    }
});