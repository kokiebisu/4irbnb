#!/bin/zsh
cd ../../
yarn aws:authenticate
yarn docker:auth
docker tag nextbnb-authorizer:latest 776733965771.dkr.ecr.us-east-1.amazonaws.com/nextbnb-authorizer:latest
docker push 776733965771.dkr.ecr.us-east-1.amazonaws.com/nextbnb-authorizer:latest
cd terraform
terraform fmt
terraform apply --auto-approve -lock=false