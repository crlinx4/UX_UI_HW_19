console.log("Your index.js file is loaded correctly!");

$("#dropdown").hover(function() {
    $(this).find("#dropdown-content a").css({"opacity":0, "margin-top":20}).show().animate({"margin-top":1, "opacity":1}, 300);
}, function() {
    $(this).find("#dropdown-content a").fadeOut("slow");
});