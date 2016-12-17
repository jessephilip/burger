$("#pushMe").on("click", function(e) {
    e.preventDefault();
    var text = $("#textArea").val().trim();
    var params = {
        burger_name: text,
        devoured: false
    };

    $.ajax({
        type: "POST",
        url: "/api/create",
        data: params,
        dataType: "json"
    });

    $("#textArea").val("");

});

$(document).on("click", ".devourButton", function(e) {
    console.log($(this).attr("id"));

    var params = {
        id: {
            id: $(this).attr("id")
        },
        devoured: {
            devoured: true
        }
    };

    $.ajax({
        type: "POST",
        url: "/api/update",
        data: params,
        dataType: "json"
    });
});
