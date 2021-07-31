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
    Name        = "dynamodb-table-1"
    Environment = "production"
  }
}