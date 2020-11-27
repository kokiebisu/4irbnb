#! /bin/zsh

services=( auth stays )

for s in "${services[@]}"
do
    cd .. && cd $s
    yarn upgrade
done

