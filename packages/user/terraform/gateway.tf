resource "aws_apigatewayv2_integration" "this" {
  api_id           = var.api_gateway_id
  
  integration_type = "AWS_PROXY"
  integration_method        = "POST"
  integration_uri = aws_lambda_function.stay_service.invoke_arn
}

resource "aws_apigatewayv2_route" "get_stays" {
  api_id    = var.api_gateway_id
  route_key = "GET /stays"
  target = "integrations/${aws_apigatewayv2_integration.this.id}"
}

resource "aws_apigatewayv2_route" "get_stay" {
  api_id    = var.api_gateway_id
  route_key = "GET /stay/{id}"
  target = "integrations/${aws_apigatewayv2_integration.this.id}"
}

resource "aws_apigatewayv2_route" "delete_stay" {
  api_id    = var.api_gateway_id
  route_key = "DELETE /stay/{id}"
  target = "integrations/${aws_apigatewayv2_integration.this.id}"
}
