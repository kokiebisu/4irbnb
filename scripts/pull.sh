#! /bin/zsh

branches = ( master client stay shared test storybook develop )

for b in "${branches[@]}"
do
    git checkout $b
    git pull origin develop --no-edit
done
