resource "aws_lambda_function" "stay_api" {
  function_name = "4irbnb-stay-api"
  role          = var.service_role_arn
  package_type  = "Image"
  image_uri = "${data.aws_ecr_repository.stay_api.repository_url}@${data.aws_ecr_image.stay_api.id}"
}

resource "aws_lambda_function" "stay_consumer" {
  function_name = "4irbnb-stay-consumer"
  role          = var.service_role_arn
  package_type  = "Image"
  image_uri = "${data.aws_ecr_repository.stay_consumer.repository_url}@${data.aws_ecr_image.stay_consumer.id}"

  vpc_config {
    # Every subnet should be able to reach an EFS mount target in the same Availability Zone. Cross-AZ mounts are not permitted.
    subnet_ids         = [var.aws_private_subnet_a_id]
    security_group_ids = [var.aws_rds_security_group_id]
  }
}

resource "aws_lambda_permission" "stay_api" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.stay_api.function_name
    principal = "apigateway.amazonaws.com"

    source_arn = "${var.api_gateway_execution_arn}/*/*"
}
resource "aws_lambda_permission" "stay_consumer" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.stay_consumer.function_name
    principal = "apigateway.amazonaws.com"

    source_arn = "${var.api_gateway_execution_arn}/*/*"
}