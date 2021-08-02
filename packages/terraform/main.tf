resource "aws_apigatewayv2_api" "nextbnb" {
    name = "nextbnb"
    protocol_type = "HTTP"
}
resource "aws_apigatewayv2_route" "nextbnb" {
  api_id    = aws_apigatewayv2_api.nextbnb.id
  route_key = "ANY /stay/{proxy+}"
}

resource "aws_apigatewayv2_integration" "nextbnb" {
  api_id           = aws_apigatewayv2_api.nextbnb.id
  integration_type = "AWS_PROXY"

  connection_type           = "INTERNET"
  integration_method        = "POST"
  passthrough_behavior      = "WHEN_NO_MATCH"
}