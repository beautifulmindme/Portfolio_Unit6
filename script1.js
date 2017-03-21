$("#submit").click(function() {
    var response = parseInt($("#number").val());
    $("#p1").show();
     if (response === 7) {
        $("#p1").html("YOU GUESSED MY FAVORITE NUMBER! :)  ");
    } else if (response < 7) {
        $("#p1").html("TOO LOW!!!! TRY AGAIN!!!   :(");
    } else if (response > 7) {
        $("#p1").html("TOO HIGH!!!! TRY  AGAIN!!!     :(");
    } else if (response === "I don't know what a number is") {
        $("#p1").html("/ˈnəmbər/ A number is an arithmetical value, expressed by a word, symbol, or figure, representing a particular quantity and used in counting and making calculations and for showing order in a series or for identification.     ");    
    }else {
     $("#p1").html("Enter numbers only please.");
    }
    $("#clear").click(function() {
    $("#p1").hide();
    });
});



$("#submit2").click(function() {
    var response = $("#color").val();
    // $("#p2").show();
    if (response === "Mint") {
        $("#p2").html("You guessed my favorite color!   :)");
    } else if (response === "mint") {
        $("#p2").html("You guessed my favorite color!   :)");
    } else {
     $("#p2").html("You didn't guess my favorite color correctly...   :(");
    }
    $("#clear2").click(function() { 
        $("#p2").hide();
    });
});
