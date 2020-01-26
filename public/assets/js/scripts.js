
$(function () {
    //console.log('loaded');

    $("#burgerForm").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newObj = {
            name: $("#newBurger").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newObj
        }).then(function () {
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });


});