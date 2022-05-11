#!/usr/bin/python3
try:
    from bottle import template, run, get, static_file, response
    import os
    import os.path
    import uuid
    import psutil
    from wifi import Cell, Scheme
    import json
except:
    import os
    import sys
    import psutil
    os.system("pip3 install -r requirements.txt")
    python = sys.executable
    os.execl(python, python, "{}".format(sys.argv[0]))

def getwificard():
    addrs = psutil.net_if_addrs()
    cards = []
    for key in addrs.keys():
        if key.startswith("wl"):
            cards.append(key)
    return list(dict.fromkeys(cards))[0]

os.makedirs("db", exist_ok=True)
if not os.path.exists("db/serial"):
    f = open("db/serial", "w+")
    f.write(str(uuid.uuid4()))
    f.close()

@get("/")
def index():
    return template("data/app.tpl")

# Static Routes
@get("/css/<filepath:re:.*\.css>")
def css(filepath):
    return static_file(filepath, root="data/css")

@get("/fonts/<filepath:re:.*\.(eot|otf|svg|ttf|woff|woff2?)>")
def font(filepath):
    return static_file(filepath, root="data/fonts")

@get("/img/<filepath:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filepath):
    return static_file(filepath, root="data/img")

@get("/js/<filepath:re:.*\.js>")
def js(filepath):
    return static_file(filepath, root="data/js")

@get("/favicon.ico")
def favicon():
    return static_file("favicon.ico", root="data")

@get("/serial")
def serial():
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.content_type = "text/plain"
    f = open("db/serial", "r")
    x = f.read()
    f.close()
    return x

@get("/battery")
def battery():
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.content_type = "text/plain"
    battery = psutil.sensors_battery()
    if not battery.power_plugged:
        if battery.percent < 15:
            return "battery-0"
        if battery.percent >= 15 and battery.percent < 50:
            return "battery-1"
        if battery.percent >= 50 and battery.percent < 80:
            return "battery-2"
        if battery.percent >= 80 and battery.percent < 99:
            return "battery-3"
        if battery.percent >= 99:
            return "battery-4"
    else:
        return "plug"

@get("/unr")
def unr():
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.content_type = "text/plain"
    os.system("/home/pi/unr.sh")
    return "OK"

@get("/networks")
def networks():
    try:
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.content_type = "text/json"
        cells = Cell.all(getwificard())
        networks = []
        for cell in cells:
            networks.append(cell.ssid)
        networks = list(dict.fromkeys(networks))
        return json.dumps(networks)
    except:
        return json.dumps([])

run(host="localhost", port=5000)