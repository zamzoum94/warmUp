var names = [ , "Vegego", "Gohan", "Goku", "Gotenks", "Trunks", "Vegeta"];



$("#next").click(function(){
    var first = $("#first").attr("src");
    var mid = $("#mid").attr("src");
    var last = $("#last").attr("src");
    var newFirst = first, newMid = mid, newLast = last;
    for(var i = 1; i <= 6; i++){
        newFirst = first.indexOf(i) !== -1 ? i:newFirst;
        newMid = mid.indexOf(i) !== -1 ? i:newMid;
        newLast = last.indexOf(i) !== -1 ? i:newLast;
    }
    newFirst++;
    newMid++;
    newLast++;
    
    newLast = newLast > 6 ? 1:newLast;
    newMid = newMid > 6 ? 1:newMid;
    newFirst = newFirst > 6 ? 1:newFirst;
    $(".1").html(names[newFirst]);
    $(".2").html(names[newMid]);
    $(".3").html(names[newLast]);
    newFirst = "images/"+newFirst+".jpg";
    newMid = "images/"+newMid+".jpg";
    newLast = "images/"+newLast+".jpg";
    
    $("#first").attr("src", newFirst);
    $("#mid").attr("src", newMid);
    $("#last").attr("src", newLast);

    
});

$("#prev").click(function(){
    var first = $("#first").attr("src");
    var mid = $("#mid").attr("src");
    var last = $("#last").attr("src");
    var newFirst = first, newMid = mid, newLast = last;
    for(var i = 1; i <= 6; i++){
        newFirst = first.indexOf(i) !== -1 ? i:newFirst;
        newMid = mid.indexOf(i) !== -1 ? i:newMid;
        newLast = last.indexOf(i) !== -1 ? i:newLast;
    }
    newFirst--;
    newMid--;
    newLast--;
    
    newLast = newLast < 1 ? 6:newLast;
    newMid = newMid < 1 ? 6:newMid;
    newFirst = newFirst < 1 ? 6:newFirst;
    $(".1").html(names[newFirst]);
    $(".2").html(names[newMid]);
    $(".3").html(names[newLast]);
    newFirst = "images/"+newFirst+".jpg";
    newMid = "images/"+newMid+".jpg";
    newLast = "images/"+newLast+".jpg";
    
    $("#first").attr("src", newFirst);
    $("#mid").attr("src", newMid);
    $("#last").attr("src", newLast);
});

$("#img1").click(function(){
    $("header").hide();
    $("footer").hide();
    var first = $("#first").attr("src");
    //alert(first);
    $("body").css("background-color", "white")
    //alert(x);
    $("body").css("background-image", "url("+first+")").css("background-size", "100vw 100vh");;
    
    var x = $("body").css("background-image");
    //alert(x);
    setTimeout(function(){
        $("header").show();
        $("footer").show();
        $("body").css("background-image", "")
        $("body").css("background-color", "#00FFFF")
    }, 3000);
})

$("#img2").click(function(){
    $("header").hide();
    $("footer").hide();
    var first = $("#mid").attr("src");
    //alert(first);
    $("body").css("background-color", "white")
    //alert(x);
    $("body").css("background-image", "url("+first+")").css("background-size", "100vw 100vh");;
    
    var x = $("body").css("background-image");
    //alert(x);
    setTimeout(function(){
        $("header").show();
        $("footer").show();
        $("body").css("background-image", "")
        $("body").css("background-color", "#00FFFF")
    }, 3000);
})


$("#img3").click(function(){
    $("header").hide();
    $("footer").hide();
    var first = $("#last").attr("src");
    //alert(first);
    //alert(x);
    $("body").css("background-image", "url("+first+")").css("background-size", "100vw 100vh");
    
    var x = $("body").css("background-image");
    //alert(x);
    setTimeout(function(){
        $("header").show();
        $("footer").show();
        $("body").css("background-image", "")
        $("body").css("background-color", "#00FFFF")
    }, 3000);
})
