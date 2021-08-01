# resource "aws_sqs_queue" "terraform_queue" {
#     name = "auth-service"
#     delay_seconds = 90
#     max_message_size = 2048
#     message_retention_seconds = 86400
#     receive_wait_time_seconds = 10
#     redrive_policy = jsonencode({
#         deadLetterTargetArn = var.dead_letter_queue.arn
#         maxReceiveCount     = 4
#     })
# }

resource "aws_dynamodb_table" "basic-dynamodb-table" {
  name           = "StayService"
  billing_mode   = "PROVISIONED"
  read_capacity  = var.read_capacity
  write_capacity = var.write_capacity
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Environment = "production"
  }
}

resource "aws_lambda_function" "stay_service" {
  function_name = "nextbnb-stay-service"
  role          = aws_iam_role.stay_service_role.arn
  package_type  = "Image"
  image_uri = "${data.aws_ecr_repository.repo.repository_url}@${data.aws_ecr_image.image.id}"
}

resource "aws_iam_role" "stay_service_role" {
  name = "nextbnb-stay-role"

  # Terraform's "jsonencode" function converts a
  # Terraform expression result to valid JSON syntax.
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

  managed_policy_arns = [aws_iam_policy.dynamodb.arn]
}

data "aws_ecr_repository" "repo" {
  name = "nextbnb-stay"
}

data "aws_ecr_image" "image" {
  repository_name = data.aws_ecr_repository.repo.name
  image_tag = "latest"
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
