$(window).load (function (){

    // loading elements
    $(".overlay .spinner").fadeOut(6000, function (){

        $("body").css("overflow","auto");

        $(this).parent().fadeOut(5000, function (){

            // show the scroll
            
            $(this).remove();
            
        });
    });
});