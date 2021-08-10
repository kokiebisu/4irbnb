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

resource "aws_rds_cluster" "postgres" {
    cluster_identifier = "4irbnb"
    engine = "aurora-postgresql"
    database_name = "4irbnb"
    master_username = "admin1234"
    master_password = "admin1234"
    enable_http_endpoint = true
    engine_mode = "serverless"
    engine_version = "10.14"
    skip_final_snapshot  = true

    scaling_configuration {
        auto_pause = true
        max_capacity = 2
        min_capacity = 2
        seconds_until_auto_pause = 300
        timeout_action = "ForceApplyCapacityChange"
    }
}