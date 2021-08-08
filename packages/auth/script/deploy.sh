#!/bin/zsh
cd ../../
yarn aws:authenticate
yarn docker:auth
docker tag 4irbnb-authorizer:latest 776733965771.dkr.ecr.us-east-1.amazonaws.com/4irbnb-authorizer:latest
docker push 776733965771.dkr.ecr.us-east-1.amazonaws.com/4irbnb-authorizer:latest
cd terraform
terraform fmt
terraform apply --auto-approve -lock=false