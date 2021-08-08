resource "aws_lambda_function" "stay_api" {
  function_name = "nextbnb-stay-service"
  role          = aws_iam_role.stay_service_role.arn
  package_type  = "Image"
  image_uri = "${data.aws_ecr_repository.stay_api.repository_url}@${data.aws_ecr_image.stay_api.id}"
}

resource "aws_lambda_function" "stay_consumer" {
  function_name = "nextbnb-stay-consumer"
  role          = aws_iam_role.stay_service_role.arn
  package_type  = "Image"
  image_uri = "${data.aws_ecr_repository.stay_consumer.repository_url}@${data.aws_ecr_image.stay_consumer.id}"
}


resource "aws_iam_role" "stay_service_role" {
  name = "nextbnb-stay-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })

  managed_policy_arns = [aws_iam_policy.dynamodb.arn, aws_iam_policy.cloudwatch_logs.arn]
}

resource "aws_iam_policy" "dynamodb" {
  name = "dynamodb"

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "VisualEditor0",
        "Effect" : "Allow",
        "Action" : [
          "dynamodb:*",
        ],
        "Resource" : "*"
      }
    ]
  })
}

resource "aws_iam_policy" "cloudwatch_logs" {
  name = "cloudwatch_logs"

  policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "logs:*"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
})
}

resource "aws_lambda_permission" "stay" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.stay_api.function_name
    principal = "apigateway.amazonaws.com"

    source_arn = "${var.api_gateway_execution_arn}/*/*"
}