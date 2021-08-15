resource "aws_dynamodb_table" "stay_database" {
  name           = "StayService"
  billing_mode   = "PROVISIONED"
  read_capacity  = var.read_capacity
  write_capacity = var.write_capacity
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "title"
    type = "S"
  }

  attribute {
    name = "country"
    type = "S"
  }

  attribute {
    name = "city"
    type = "S"
  }

  attribute {
    name = "province"
    type = "S"
  }

  tags = {
    Environment = "production"
  }
}