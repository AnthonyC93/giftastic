$(document).ready(function(){

var list = ["dog","cat","hippo","giraffe"];

for(var i=0;i<list.length;i++){
    var newButton = $("<button>");
    newButton.addClass("btn btn-info animal");
    newButton.attr("data-name",list[i]);
    newButton.html(list[i]);
    $("#listPlace").append(newButton);   
}

$("#search").on("click",function(){
    var wordSearched= $("#searchBar")[0].value;
    if(wordSearched!=""){
        var buttonToAdd = $("<button class='btn btn-info animal'>"+wordSearched+"</div>")
        buttonToAdd.attr("data-name",wordSearched);
        $("#listPlace").append(buttonToAdd);   
    }
})

$("#gifPlace").on("click","img",function(){
    if($(this).hasClass("isOn")){
        this.src = this.src.replace("200w.gif","200w_s.gif");
        $(this).removeClass("isOn")
    }else{
        this.src = this.src.replace("200w_s.gif","200w.gif");
        $(this).addClass("isOn")
    }
})

$("#listPlace").on("click",".animal",function(){
    var pressed = event.target.innerHTML;
    $("#gifPlace").empty();
    var api = "https://api.giphy.com/v1/gifs/search?api_key=fR1WeOtM19cSsAOd4IjdIDeF5RDytJx5&q="+pressed

    $.ajax({
        url:api,
        method:"GET"
    }).then(function(response){

        for(var v=0;v<40;v++){
            var newImg = $("<img>");
            var imgSource = response.data[v].images.fixed_width_still.url;
            newImg.attr("src",imgSource)
            newImg.addClass("gif")
            $("#gifPlace").append(newImg);
        }
    })
})

})