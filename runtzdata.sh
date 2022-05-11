#!/bin/bash
feh --bg-scale /home/pi/feldberg/bootsplash.png &
killall surf
lxterminal -e "/home/pi/feldberg/tzdata.sh"
feh --bg-scale /home/pi/feldberg/crash.png &