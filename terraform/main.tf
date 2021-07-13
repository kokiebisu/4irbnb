terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
        }
    }
}


module "networking" {
    source = "./resources"
    profile = "personal"
    region = "us-east-1"
}



