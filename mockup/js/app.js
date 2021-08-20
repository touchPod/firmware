$(document).ready(function() {
    $("#notifications").hide();
    $("#settingsui").hide();
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
    updateTime();
    window.setInterval(updateTime(), 1000);
    $("#home").click(function() {
        screen = "home";
        $("#notifications").hide();
        $("#settingsui").hide();
        $("#clock").show();
        $("#ui").show();
    });
    $("#action").click(function() {
        if (screen === "home") {
            $("#ui").show();
            $("#clock").hide();
            $("#notifications").show();
            screen = "notifications";
        }
    });
    $("#settings").click(function() {
        $("#ui").hide();
        $("#settingsui").show();
        screen = "settings";
    });
});