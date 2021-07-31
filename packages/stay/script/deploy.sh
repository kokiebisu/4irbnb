#!/bin/zsh
yarn aws:authenticate
cd ../../
ls -a
yarn docker:stay
docker tag nextbnb-stay:latest 776733965771.dkr.ecr.us-east-1.amazonaws.com/nextbnb-stay:latest
docker push 776733965771.dkr.ecr.us-east-1.amazonaws.com/nextbnb-stay:latest
cd terraform
terraform apply --auto-approve