#!/usr/bin/env bash
echo "Extracting API"
yarn clean
yarn build
yarn extract
echo "Generating Markdown"
GH_PAGES_CONFIG_EXISTS=$(test -f docs/_config.yml)
if [ $GH_PAGES_CONFIG_EXISTS ]
then
    echo "Github pages config file detected..."
    # Temporarily copying over the _config.yml temporarily
    cp docs/_config.yml .
fi

yarn api-documenter markdown -i temp -o docs

if [ $GH_PAGES_CONFIG_EXISTS ]
then
    echo "Adding back the config file to newly created docs folder..."
    cp _config.yml docs/_config.yml
    rm _config.yml
fi