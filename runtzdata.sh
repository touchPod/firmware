#!/bin/bash
feh --bg-scale /home/pi/feldberg/bootsplash.png &
killall surf
lxterminal -e "sudo dpkg-reconfigure tzdata"
feh --bg-scale /home/pi/feldberg/crash.png &