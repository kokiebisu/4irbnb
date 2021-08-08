resource "aws_cloudwatch_log_group" "stay_api" {
  name = "/aws/lambda/4irbnb/${aws_lambda_function.stay_api.function_name}"

  retention_in_days = 30
}

resource "aws_cloudwatch_log_group" "stay_consumer" {
  name = "/aws/lambda/4irbnb/${aws_lambda_function.stay_consumer.function_name}"

  retention_in_days = 30
}