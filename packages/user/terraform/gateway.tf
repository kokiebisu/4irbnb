resource "aws_apigatewayv2_integration" "this" {
  api_id           = var.api_gateway_id
  
  integration_type = "AWS_PROXY"
  integration_method        = "POST"
  integration_uri = aws_lambda_function.stay_service.invoke_arn
}

resource "aws_apigatewayv2_route" "check_user" {
  api_id    = var.api_gateway_id
  route_key = "GET /user/check"
  target = "integrations/${aws_apigatewayv2_integration.this.id}"
}
