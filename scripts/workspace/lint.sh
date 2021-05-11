#!/bin/bash
echo "---------- ✨ Linting All Packages ----------"
yarn lerna run lint --stream --concurrency 2