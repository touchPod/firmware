$(document).ready(function() {
    $("#notifications").hide();
    $("#settingsui").hide();
    $("#aboutui").hide();
    $("#connectivityui").hide();
    $("#flipped").hide();
    $("#snui").hide();
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
    var flipped = false;
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 49) {
            if (!flipped) {
                $("#ui").hide();
                $("#settingsui").show();
                $("#aboutui").hide();
                $("#connectivityui").hide();
                selection = 0;
                $("#connectivity").attr("class", "selected");
                $("#about").attr("class", "");
                screen = "settings";
            } else {
                screen = "snui";
                $("#ui").hide();
                $("#settingsui").hide();
                $("#aboutui").hide();
                $("#connectivityui").hide();
                $.get("/serial", function(data) {
                    $("#snt").html(data);
                    $("#snui").show();
                });
            }
        }
        if (event.keyCode === 50) {
            if (!flipped) {
                if (screen === "home") {
                    $("#ui").show();
                    $("#clock").hide();
                    $("#notifications").show();
                    screen = "notifications";
                }
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
            } else {
                $.get("/unr", function(data){});
            }
        }
        if (event.keyCode === 51) {
            if (screen === "home") {
                flipped = !flipped;
                if (flipped) {
                    $("#buttons").hide();
                    $("#flipped").show();
                } else {
                    $("#buttons").show();
                    $("#flipped").hide();
                }
            }
            screen = "home";
            $("#notifications").hide();
            $("#settingsui").hide();
            $("#aboutui").hide();
            $("#connectivityui").hide();
            $("#snui").hide();
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
    });
});