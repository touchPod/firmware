#!/bin/bash
killall surf
lxterminal -e "sudo dpkg-reconfigure tzdata"
surf http://localhost:5000 &!