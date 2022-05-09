<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/fork-awesome.min.css">
        <script src="js/jquery.min.js"></script>
        <script src="js/app.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div><i class="fa fa-battery-3" id="battery" aria-hidden="true"></i></div>
        <div id="buttons">
            <i class="fa fa-cog" aria-hidden="true" id="settings"></i>
            <i class="fa fa-exclamation" aria-hidden="true" id="action"></i>
            <i id="logo"><img src="img/logo.svg" height="18" id="home"></i>
        </div>
        <div id="ui">
            <div id="notifications"><b style="color:gray;">No new notifications.</b></div>
            <h2 id="clock" onload="showTime()">13:37</h2>
            <div id="version">v0.1-dev</div>
        </div>
        <div id="settingsui">
            <div id="uititle">Settings</div>
            <div class="ui-content">
                <ul class="menu">
                    <li id="connectivity" class="selected">Connectivity</li>
                    <li id="about">About</li>
                </ul>
            </div>
        </div>
    </body>
</html>