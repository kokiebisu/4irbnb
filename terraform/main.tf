terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
  backend "remote" {
    organization = "do-it-simple"

    workspaces {
      name = "nextbnb"
    }
  }
}

provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region  = var.region
}
module "services" {
  source = "../packages/terraform"
}

module "auth" {
  source = "../packages/service-auth/terraform"
}

