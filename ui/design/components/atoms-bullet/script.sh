#! /bin/bash
lerna add @babel/core --dev --scope=@nextbnb/$1
lerna add @babel/plugin-transform-runtime --dev --scope=@nextbnb/$1
lerna add @babel/preset-env --dev --scope=@nextbnb/$1
lerna add @babel/preset-react --dev --scope=@nextbnb/$1
lerna add @babel/preset-typescript --dev --scope=@nextbnb/$1
lerna add @types/theme-ui --dev --scope=@nextbnb/$1
lerna add babel-loader --dev --scope=@nextbnb/$1
lerna add css-loader --dev --scope=@nextbnb/$1
lerna add file-loader --dev --scope=@nextbnb/$1
lerna add mini-css-extract-plugin --dev --scope=@nextbnb/$1
lerna add react --dev --scope=@nextbnb/$1
lerna add typescript --dev --scope=@nextbnb/$1
lerna add webpack --dev --scope=@nextbnb/$1
lerna add webpack-cli --dev --scope=@nextbnb/$1
lerna add @nextbnb/design --scope=@nextbnb/$1
lerna add @nextbnb/theme --scope=@nextbnb/$1
lerna add framer-motion --scope=@nextbnb/$1
lerna add theme-ui --scope=@nextbnb/$1