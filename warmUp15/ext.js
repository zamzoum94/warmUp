var bool = true;;
$("#button").click(function(){
    var value = $("#text").val();
    $("ul").append("<li>" +value+ "</li>");
    if(bool){
        $("ul li").last().addClass("firstClass");
    } else{
        $("ul li").last().addClass("secondClass");
    }
    bool = !bool;
})