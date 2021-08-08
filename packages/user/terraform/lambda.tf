resource "aws_lambda_function" "user_api" {
  function_name = "4irbnb-user-api"
  role          = var.service_role_arn
  package_type  = "Image"
  image_uri = "${data.aws_ecr_repository.user_api.repository_url}@${data.aws_ecr_image.user_api.id}"
}

resource "aws_lambda_function" "user_consumer" {
  function_name = "4irbnb-user-consumer"
  role          = var.service_role_arn
  package_type  = "Image"
  image_uri = "${data.aws_ecr_repository.user_consumer.repository_url}@${data.aws_ecr_image.user_consumer.id}"
}

resource "aws_lambda_permission" "user_api" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.user_api.function_name
    principal = "apigateway.amazonaws.com"

    source_arn = "${var.api_gateway_execution_arn}/*/*"
}

resource "aws_lambda_permission" "user_consumer" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.user_consumer.function_name
    principal = "apigateway.amazonaws.com"

    source_arn = "${var.api_gateway_execution_arn}/*/*"
}