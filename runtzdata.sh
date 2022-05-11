#!/bin/bash
feh --bg-scale /home/pi/feldberg/bootsplash.png &
killall surf
lxterminal -e "sudo dpkg-reconfigure tzdata && surf http://localhost:5000 &"
feh --bg-scale /home/pi/feldberg/crash.png &
