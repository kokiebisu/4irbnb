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
  region     = var.region
}

resource "aws_apigatewayv2_api" "nextbnb" {
    name = "nextbnb"
    protocol_type = "HTTP"
}

module "services" {
  source = "../packages/terraform"
}

module "stay" {
  source = "../packages/stay/terraform"

  read_capacity  = 10
  write_capacity = 10

  api_gateway_id = aws_apigatewayv2_api.nextbnb.id
}

module "database" {
  source = "../packages/database/terraform"

  read_capacity  = 10
  write_capacity = 10
}


