#! /bin/zsh
branch_name=$(git symbolic-ref --short -q HEAD)
git add -A
git commit -m \""$0"\"
git push origin ${branch_name}
