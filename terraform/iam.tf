resource "aws_iam_role" "service_role" {
  name = "4irbnb-service-role"

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
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Action" : [
          "logs:*"
        ],
        "Effect" : "Allow",
        "Resource" : "*"
      }
    ]
  })
}