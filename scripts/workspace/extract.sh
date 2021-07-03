#!/bin/bash
echo "---------- 💨 Extracting API from All Packages ----------"
lerna run extract --scope=@nextbnb/{common,database,utils}