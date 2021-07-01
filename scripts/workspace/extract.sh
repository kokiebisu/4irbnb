#!/bin/bash
echo "---------- 💨 Extracting API from All Packages ----------"
lerna exec 'yarn extract' --scope=@nextbnb/{common,database,utils}