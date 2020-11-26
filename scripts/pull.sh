#! /bin/zsh

git checkout master
git pull origin develop --no-edit

git checkout develop
git pull origin develop --no-edit

git checkout client
git pull origin develop --no-edit 

git checkout stay
git pull origin develop --no-edit

git checkout shared
git pull origin develop --no-edit

git checkout storybook
git pull origin develop --no-edit

git checkout develop