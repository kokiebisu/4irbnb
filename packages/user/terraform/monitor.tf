resource "aws_cloudwatch_log_group" "stay" {
  name = "/aws/lambda/nextbnb/${aws_lambda_function.stay_service.function_name}"

  retention_in_days = 30
}