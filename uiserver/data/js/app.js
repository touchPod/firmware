$(document).ready(function() {
    $("#notifications").hide();
    $("#settingsui").hide();
    $("#aboutui").hide();
    $("#connectivityui").hide();
    var screen = "home";
    function updateTime() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        var time = h + ":" + m;
        $("#clock").html(time);
    }
    function updateBattery() {
        $.get("/battery", function(data) {
            $("#battery").attr("class", "fa fa-"+data);
        });
    }
    updateTime();
    updateBattery();
    window.setInterval(function() {
        updateTime();
        updateBattery();
    }, 1000);
    var selection = 0;
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 49) {
            $("#ui").hide();
            $("#settingsui").show();
            $("#aboutui").hide();
            $("#connectivityui").hide();
            selection = 0;
            $("#connectivity").attr("class", "selected");
            $("#about").attr("class", "");
            screen = "settings";
        }
        if (event.keyCode === 50) {
            if (screen === "home") {
                $("#ui").show();
                $("#clock").hide();
                $("#notifications").show();
                screen = "notifications";
            }
        }
        if (event.keyCode === 51) {
            screen = "home";
            $("#notifications").hide();
            $("#settingsui").hide();
            $("#aboutui").hide();
            $("#connectivityui").hide();
            $("#clock").show();
            $("#ui").show();
        }
        if (event.keyCode === 38) {
            if (screen === "settings") {
                selection = 0;
                $("#connectivity").attr("class", "selected");
                $("#about").attr("class", "");
            }
        }
        if (event.keyCode === 40) {
            selection = 1;
            $("#connectivity").attr("class", "");
            $("#about").attr("class", "selected");
        }
        if (event.keyCode === 13) {
            if (screen === "settings") {
                if (selection === 0) {
                    $("#settingsui").hide();
                    $("#connectivityui").show();
                    screen = "connectivity";
                } else {
                    $("#settingsui").hide();
                    $("#aboutui").show();
                    screen = "about";
                }
            }
        }
    });
});