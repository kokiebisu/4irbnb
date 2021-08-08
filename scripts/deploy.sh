#!/bin/zsh
cd ../../terraform

echo "-------------- ⚽️ Formatting Terraform script... ⚽️ ---------------------------------"
terraform fmt

echo "--------------- 🚗  Building the Infrastructure... 🚗 --------------------------------"
terraform apply --auto-approve -lock=false

cd ../

# echo "-------------- ✨ Logging into Elastic Container Registry... ✨ ---------------------"
# aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 776733965771.dkr.ecr.us-east-1.amazonaws.com

# echo "-------------- 👷‍♂️ Building the Docker image for nextbnb-$1-$2... 👷‍♂️ -----------------"
# docker build -t nextbnb-$1-$2 -f ./packages/$1/docker/api/Dockerfile .

# echo "-------------- 📩 Tagging the image... 📩 -------------------------------------------"
# docker tag nextbnb-$1-$2:latest 776733965771.dkr.ecr.us-east-1.amazonaws.com/nextbnb-$1-$2:latest

# echo "-------------- 🌬 Pushing the image... 🌬 -------------------------------------------"
# docker push 776733965771.dkr.ecr.us-east-1.amazonaws.com/nextbnb-$1-$2:latest

