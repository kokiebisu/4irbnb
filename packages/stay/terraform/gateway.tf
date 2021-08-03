resource "aws_apigatewayv2_api" "lambda" {
    name = "nextbnb"
    protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "this" {
  api_id = aws_apigatewayv2_api.lambda.id
  name   = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "this" {
  api_id           = aws_apigatewayv2_api.lambda.id
  
  integration_type = "AWS_PROXY"
  integration_method        = "POST"
  integration_uri = aws_lambda_function.stay_service.invoke_arn
}

resource "aws_apigatewayv2_route" "get_stays" {
  api_id    = aws_apigatewayv2_api.lambda.id
  route_key = "GET /stays"
  target = "integrations/${aws_apigatewayv2_integration.this.id}"
}

resource "aws_apigatewayv2_route" "get_stay" {
  api_id    = aws_apigatewayv2_api.lambda.id
  route_key = "GET /stay/{id}"
  target = "integrations/${aws_apigatewayv2_integration.this.id}"
}

resource "aws_apigatewayv2_route" "delete_stay" {
  api_id    = aws_apigatewayv2_api.lambda.id
  route_key = "DELETE /stay/{id}"
  target = "integrations/${aws_apigatewayv2_integration.this.id}"
}

# resource "aws_apigatewayv2_deployment" "this" {
#   api_id      = aws_apigatewayv2_api.lambda.id
#   description = "Example deployment"

#   lifecycle {
#     create_before_destroy = true
#   }
# }

