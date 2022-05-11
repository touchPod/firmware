$(document).ready(function() {
    $("#flipped").hide();
    function hideall() {
        $("#notifications").hide();
        $("#settingsui").hide();
        $("#aboutui").hide();
        $("#connectivityui").hide();
        $("#updateui").hide();
        $("#ui").hide();
        $("#clock").hide();
        $("#date").hide();
    }
    hideall();
    $("#ui").show();
    $("#clock").show();
    $("#date").show();
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
    function updateDate() {
        $.get("/date", function(data) {
            $("#date").html(data);
        });
    }
    function updateBattery() {
        $.get("/battery", function(data) {
            $("#battery").attr("class", "fa fa-"+data);
        });
    }
    updateTime();
    updateDate();
    updateBattery();
    window.setInterval(function() {
        updateTime();
        updateDate();
        updateBattery();
    }, 1000);
    var selection = 0;
    var flipped = false;
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 49) {
            if (!flipped) {
                hideall();
                $("#settingsui").show();
                selection = 0;
                $("#connectivity").attr("class", "selected");
                $("#about").attr("class", "");
                screen = "settings";
            } else {
                $.get("/timezone", function(data){});
            }
        }
        if (event.keyCode === 50) {
            if (!flipped) {
                if (screen === "home") {
                    $("#ui").show();
                    $("#clock").hide();
                    $("#date").hide();
                    $("#notifications").show();
                    screen = "notifications";
                }
                if (screen === "settings") {
                    if (selection === 0) {
                        $("#settingsui").hide();
                        $("#connectivityui").show();
                        $.get("/networks", function(data) {
                            var nn = 0;
                            $("#networks").html("");
                            data.forEach(element => {
                                $("#networks").append("<li><i class=\"fa fa-wifi\" aria-hidden=\"true\"></i> "+element+"</li>");
                                nn+=1;
                            });
                            if (nn === 0) {
                                $("#networks").html("<li>No networks found.</li>")
                            }
                        });
                        screen = "connectivity";
                    } else {
                        $("#settingsui").hide();
                        $("#aboutui").show();
                        screen = "about";
                    }
                }
            } else {
                if (screen === "update") {
                    $.get("/unr", function(data){});
                    $("body").html("<div id=\"sstatus\">Updating...</div>");
                }
                hideall();
                $("#updateui").show();
                screen = "update";
            }
        }
        if (event.keyCode === 13) {
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
            hideall();
            $("#clock").show();
            $("#date").show();
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