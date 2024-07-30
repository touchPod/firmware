#!/bin/bash
feh --bg-scale /home/pi/firmware/bootsplash.png &
killall surf
lxterminal -e "sudo dpkg-reconfigure tzdata" && /home/pi/init.sh
feh --bg-scale /home/pi/firmware/crash.png &