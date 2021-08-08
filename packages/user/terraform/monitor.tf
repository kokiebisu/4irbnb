resource "aws_cloudwatch_log_group" "user_api" {
  name = "/aws/lambda/${aws_lambda_function.user_api.function_name}"

  retention_in_days = 30
}

resource "aws_cloudwatch_log_group" "user_consumer" {
  name = "/aws/lambda/${aws_lambda_function.user_consumer.function_name}"

  retention_in_days = 30
}