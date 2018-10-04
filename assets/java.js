var  topics =[
    "cats" , "dogs" , "bears" , "lions" , "cubs"
];

for ( i = 0; i < topics.length; i++){
    $("#div3").append("<button type='button' class='btn btn-primary' onclick='searchGif(\"" + topics[i] + "\")' value=' " + topics[i] + "'> " + topics[i] + " </button>");
}






function searchbutton(){
    var userinput = $('#userinput').val();
    seachgif(userinput)
};

function submitbutton(){
    var userinput = $("#userinput").val();
    if (userinput){
        $('#div3').append("<button type='button' onclick='searchGif(\"" + userinput + "\")' class='btn btn-primary' value=' " + userinput + "'> " + userinput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
    url: 'https://api.giphy.com/v1/gifs/search?q=' + gifName + '&api_key=6VQfw21duXz3y2wzYmsdniqXCQmRI8R8&limit=10',
    method: "GET"
}).done(function (response){
    displayGif(response)

})
}

function displayGif(response){
    $('#div5').empty();
    
    for (var i = 0; i < response.data.length; i++){
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
        '" data-still=" ' + response.data[i].images.fixed_height_still.url +
        ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('#div5').append(image);
        
    }
    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
    
    
}


