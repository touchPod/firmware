#!/bin/bash
killall surf
xterminal -e "sudo dpkg-reconfigure tzdata"
surf http://localhost:5000 &!