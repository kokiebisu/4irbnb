terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region     = var.region
}

module "services" {
  source = "../packages/terraform"
}

module "database" {
  source = "../packages/database/terraform"

  db_cluster_identifier = "cluster-airbnb"
  db_name               = "airbnb"
  db_rds_username    = var.db_rds_username
  db_rds_password    = var.db_rds_password
  rds_security_group_arn =  aws_security_group.rds.arn
  vpc_rds_security_group_id = aws_security_group.rds.id
  vpc_rds_subnet_group = aws_db_subnet_group.rds.name
}


module "stay" {
  source = "../packages/stay/terraform"

  read_capacity  = 10
  write_capacity = 10

  api_gateway_id            = aws_apigatewayv2_api.lambda.id
  api_gateway_execution_arn = aws_apigatewayv2_api.lambda.execution_arn

  service_role_arn = aws_iam_role.service_role.arn

  aws_private_subnet_a_id = aws_subnet.private_a.id
  aws_rds_security_group_id = aws_security_group.rds.id
}

# module "user" {
#   source = "../packages/user/terraform"

#   read_capacity  = 10
#   write_capacity = 10

#   api_gateway_id            = aws_apigatewayv2_api.lambda.id
#   api_gateway_execution_arn = aws_apigatewayv2_api.lambda.execution_arn

#   service_role_arn = aws_iam_role.service_role.arn

# }

# module "web" {
#   source = "../packages/web/terraform"

#   site_domain     = var.site_domain
#   certificate_arn = aws_acm_certificate_validation.this.certificate_arn
#   route53_zone_id = data.aws_route53_zone.this.zone_id
# }
