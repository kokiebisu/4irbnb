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

module "common" {
  source = "../packages/common/terraform"

  read_capacity  = 10
  write_capacity = 10
}


module "stay" {
  source = "../packages/stay/terraform"

  read_capacity  = 10
  write_capacity = 10

  api_gateway_id            = aws_apigatewayv2_api.lambda.id
  api_gateway_execution_arn = aws_apigatewayv2_api.lambda.execution_arn

  service_role_arn = aws_iam_role.service_role.arn

}

module "user" {
  source = "../packages/user/terraform"

  read_capacity  = 10
  write_capacity = 10

  api_gateway_id            = aws_apigatewayv2_api.lambda.id
  api_gateway_execution_arn = aws_apigatewayv2_api.lambda.execution_arn

  service_role_arn = aws_iam_role.service_role.arn

}

module "web" {
  source = "../app/web/terraform"

  site_domain     = var.site_domain
  certificate_arn = aws_acm_certificate_validation.this.certificate_arn
  route53_zone_id = data.aws_route53_zone.this.zone_id
}
