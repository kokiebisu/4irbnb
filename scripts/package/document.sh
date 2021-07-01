#!/bin/bash
echo "---------- ✨ Documenting $(pwd) ----------"
yarn build
api-extractor run --local