terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
        }
    }
}

locals {
  app_name = "nextbnb"
}


module "networking" {
    source = "./resources"

    app_name = local.app_name
    profile = var.profile
    region = var.region
}



