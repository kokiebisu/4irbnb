resource "aws_internet_gateway" "default" {
  vpc_id = aws_vpc.vpc.id

  tags = {
    Name = "${var.app_name}-internet-gateway"
  }
}

resource "aws_apigatewayv2_api" "lambda" {
  name          = "4irbnb"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "this" {
  api_id      = aws_apigatewayv2_api.lambda.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_domain_name" "this" {
  domain_name = "api.${var.site_domain}"

  domain_name_configuration {
    certificate_arn = aws_acm_certificate.this.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_apigatewayv2_api_mapping" "this" {
  api_id      = aws_apigatewayv2_api.lambda.id
  domain_name = aws_apigatewayv2_domain_name.this.id
  stage       = aws_apigatewayv2_stage.this.id
}

