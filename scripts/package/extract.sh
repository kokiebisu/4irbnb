#!/bin/bash
echo "---------- ✨ Extracting the API at $(pwd) ----------"
yarn build
api-extractor run --local
 