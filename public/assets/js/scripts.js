
$(function () {

    $("#burgerForm").on("submit", (e) => {
        e.preventDefault();

        var newObj = {
            name: $("#newBurger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newObj
        }).then(function () {
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    // handle devour event
    $(".burger-eater").on("click", (e) => {

        // get id and devour state from clicked object
        const id = e.target.dataset.id;
        const devourState = e.target.dataset.isdevoured;
        // prep devourState to send in req.body
        var oldDevourState = {
            devoured: devourState
        };

        // send id and devourState to controller route
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: oldDevourState
        }).then(() => {
            location.reload();
        })
    })


});