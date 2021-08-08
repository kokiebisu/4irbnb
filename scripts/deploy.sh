#!/bin/zsh

cd ../../

echo "-------------- 👷‍♂️ Building the Docker image for 4irbnb-$1-$2... 👷‍♂️ -----------------"
docker build -t 4irbnb-$1-$2 -f ./packages/$1/docker/$2/Dockerfile .

echo "-------------- 👷‍♂️ Building the Docker image for 4irbnb-$1-$3... 👷‍♂️ -----------------"
docker build -t 4irbnb-$1-$3 -f ./packages/$1/docker/$3/Dockerfile .

echo "-------------- 📩 Tagging the image... 📩 -------------------------------------------"
docker tag 4irbnb-$1-$2:latest 776733965771.dkr.ecr.us-east-1.amazonaws.com/4irbnb-$1-$2:latest
docker tag 4irbnb-$1-$3:latest 776733965771.dkr.ecr.us-east-1.amazonaws.com/4irbnb-$1-$3:latest

echo "--------------- 🚗  Building the image repositories... 🚗 --------------------------------"
aws ecr create-repository --repository-name 4irbnb-$1-$2
aws ecr create-repository --repository-name 4irbnb-$1-$3

echo "-------------- ✨ Logging into Elastic Container Registry... ✨ ---------------------"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 776733965771.dkr.ecr.us-east-1.amazonaws.com

echo "-------------- 🌬 Pushing the image... 🌬 -------------------------------------------"
docker push 776733965771.dkr.ecr.us-east-1.amazonaws.com/4irbnb-$1-$2:latest
docker push 776733965771.dkr.ecr.us-east-1.amazonaws.com/4irbnb-$1-$3:latest

cd terraform

echo "-------------- ⚽️ Formatting Terraform script... ⚽️ ---------------------------------"
terraform fmt

echo "--------------- 🚗  Building the Infrastructure... 🚗 --------------------------------"
terraform apply --auto-approve -lock=false





