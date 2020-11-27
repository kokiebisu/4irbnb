#! /bin/zsh
branch_name=$(git symbolic-ref --short -q HEAD)
branches=( master client stay storybook develop )

for b in "${branches[@]}"
do
    git checkout $b
    git pull origin develop --no-edit
    ./update.sh
done
git checkout ${branch_name}