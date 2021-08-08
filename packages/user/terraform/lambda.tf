data "aws_ecr_repository" "user_api" {
  name = "4irbnb-user-api"
}

data "aws_ecr_repository" "user_consumer" {
  name = "4irbnb-user-consumer"
}

data "aws_ecr_image" "user_api" {
  repository_name = data.aws_ecr_repository.user_api.name
  image_tag = "latest"
}

data "aws_ecr_image" "user_consumer" {
  repository_name = data.aws_ecr_repository.user_consumer.name
  image_tag = "latest"
}

resource "aws_lambda_function" "user_api" {
  function_name = "4irbnb-user-api"
  role          = aws_iam_role.user_service_role.arn
  package_type  = "Image"
  image_uri = "${data.aws_ecr_repository.user_api.repository_url}@${data.aws_ecr_image.user_api.id}"
}

resource "aws_lambda_function" "user_consumer" {
  function_name = "4irbnb-user-consumer"
  role          = aws_iam_role.user_service_role.arn
  package_type  = "Image"
  image_uri = "${data.aws_ecr_repository.user_consumer.repository_url}@${data.aws_ecr_image.user_consumer.id}"
}

resource "aws_lambda_permission" "user" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.user_api.function_name
    principal = "apigateway.amazonaws.com"

    source_arn = "${var.api_gateway_execution_arn}/*/*"
}

resource "aws_lambda_permission" "user" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.user_consumer.function_name
    principal = "apigateway.amazonaws.com"

    source_arn = "${var.api_gateway_execution_arn}/*/*"
}