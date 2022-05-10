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
        <div id="flipped">
            <i class="fa fa-tag" aria-hidden="true" id="sn"></i>
            <i class="fa fa-refresh" aria-hidden="true" id="unr"></i>
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
        <div id="aboutui">
            <div id="uititle">koyu SmartOS</div>
            <div class="ui-content">
                <p>v0.1-dev</p>
                <p>&copy; koyu.space 2022</p>
            </div>
        </div>
        <div id="connectivityui">
            <div id="uititle">Connectivity</div>
            <div class="ui-content">
                <p>No UI...yet</p>
                <p><b>TEST TEST TEST TEST TEST</b></p>
            </div>
        </div>
    </body>
</html>