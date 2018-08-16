var index = [];

function displayImage() {

    var object = $(this).attr("data-object");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        object + "&api_key=dc6zaTOxFJmzC&limit=1";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var objectImage = $("<img>");
            objectImage.attr("src", results[i].images.fixed_height_still.url);
            objectImage.attr("data-animate", results[i].images.fixed_height.url);
            objectImage.attr("data-still", results[i].images.fixed_height_still.url);
            objectImage.attr("data-state", "still")
            objectImage.addClass("gif");
            gifDiv.prepend(objectImage);
            $("#gif-selection").prepend(gifDiv);
        }
    });
};

function renderButtons() {
    $(".button").empty();

    for (var i = 0; i < index.length; i++) {
        var button = $("<button>");
        button.addClass("added-button");
        button.attr("data-object", index[i]);
        button.text(index[i]);
        $(".button").append(button);
    }
}
$("#add-object").on("click", function (event) {
    event.preventDefault();
    var object = $("#object-input").val().trim();
    index.push(object);
    renderButtons();
});

$(document).on("click", ".added-button", displayImage);
renderButtons();

$("body").on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

})
