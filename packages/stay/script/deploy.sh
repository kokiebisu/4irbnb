#!/bin/zsh
yarn aws:authenticate
cd ../../
yarn docker:stay
docker tag nextbnb-stay:latest 776733965771.dkr.ecr.us-east-1.amazonaws.com/nextbnb-stay:latest
docker push 776733965771.dkr.ecr.us-east-1.amazonaws.com/nextbnb-stay:latest
cd terraform
terraform fmt
terraform apply --auto-approve -lock=false