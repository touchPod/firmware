#!/usr/bin/python3
from bottle import template, run, get, static_file, response
import os
import os.path
import uuid

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

run(host="localhost", port=5000)