$(document).ready(function(){ // Code to run goes here
$("#submit").click(function() {
    var response = $("#number").val();
    $("p").show();
     if (parseInt(response) === 7) {
        $("p").html("YOU GUESSED MY FAVORITE NUMBER! :)  ");
    } else if (response < 7) {
        $("p").html("TOO LOW!!!! TRY AGAIN!!!   :(");
    } else if (response > 7) {
        $("p").html("TOO HIGH!!!! TRY  AGAIN!!!     :(");
    } else if (response === "I don't know what a number is") {
        $("p").html("/ˈnəmbər/ A number is an arithmetical value, expressed by a word, symbol, or figure, representing a particular quantity and used in counting and making calculations and for showing order in a series or for identification.     ");    
    }else {
     $("p").html("Enter numbers only please...");
    }
$("#clear").click(function() {
    $("p").hide();
});

}):

$("#submitt").click(function() {
    var response = $("#color").val();
    $("p").show();
    if (response === "Mint") {
        $("p").html("You guessed my favorite color!   :)");
    } else if (response === "mint") {
        $("p").html("You guessed my favorite color!   :)");
    } else {
     $("p").html("You didn't guess my favorite color correctly...   :(");
    }
    $("#clearr").click(function() { 
        $("p").hide();
});


});
