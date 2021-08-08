resource "aws_cloudwatch_log_group" "stay" {
  name = "/aws/lambda/4irbnb/${aws_lambda_function.stay_api.function_name}"

  retention_in_days = 30
}