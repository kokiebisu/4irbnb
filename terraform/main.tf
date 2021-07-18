terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
        }
    }
}

locals {
  app_name = "nextbnb"
  profile = "personal"
  region = "us-east-1"
}

provider aws {
    profile = local.profile
    region = local.region
}

module "networking" {
    source = "./resources"

    app_name = local.app_name
    profile = "personal"
    region = "us-east-1"
}

module "services" {
    source = "../packages/terraform"
}

module "auth" {
    source = "../packages/service-auth/terraform"

    dead_letter_queue = module.services.dead_letter_queue
}

