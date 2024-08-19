let playing = false;
let ishome = true;
let audio;

$(document).ready(function() {
    audio = $("#audio")[0];
    $("#bottom").load("template/bottom.html");
    $("#header").load("template/header.html");
    if (!localStorage.getItem("setup")) {
        $("#app").load("template/setup.html");
    } else {
        $("#app").load("template/home.html");
    }
    window.setTimeout(function() {
        clickEvents();
    }, 200);
    window.setInterval(function() {
        $("#clock-time").text(new Date().toLocaleTimeString().split(":").slice(0, 2).join(":"));
    }, 200);
    $.get("/issetup", function(data) {
        if (data == "true") {
            localStorage.setItem("setup", true);
        }
    });
});

$(document).on("load", function() {
    clickEvents();
});

function clickEvents() {
    $("#home").click(function() {
        if (playing) {
            if (ishome) {
                $("#app").load("template/playing.html");
                ishome = false;
            } else {
                $("#app").load("template/home.html");
                ishome = true;
            }
        } else {
            $("#app").load("template/home.html");
            ishome = true;
        }
    });
}