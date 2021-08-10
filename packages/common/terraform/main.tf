# resource "aws_dynamodb_table" "test_database" {
#   name           = "TestService"
#   billing_mode   = "PROVISIONED"
#   read_capacity  = var.read_capacity
#   write_capacity = var.write_capacity
#   hash_key       = "id"

#   attribute {
#     name = "id"
#     type = "S"
#   }

#   tags = {
#     Environment        = "dev"
#   }
# }

resource "aws_db_instance" "test" {
  identifier = "test"
  instance_class = "db.t2.micro"
  allocated_storage = 5
  engine = "aurora-postgresql"
  engine_version = "13.1"
  username = var.db_username
  password = var.db_password
  publicly_accessible = true
  skip_final_snapshot = true
}