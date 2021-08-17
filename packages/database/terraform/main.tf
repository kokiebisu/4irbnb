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

############# USED FOR AURORA
# resource "aws_rds_cluster" "postgres" {
#     cluster_identifier = var.db_cluster_identifier
#     engine = "aurora-postgresql"
#     database_name = var.db_name
#     master_username = var.db_master_username
#     master_password = var.db_master_password
#     enable_http_endpoint = true
#     engine_mode = "serverless"
#     engine_version = "10.14"
#     skip_final_snapshot  = true

#     scaling_configuration {
#         auto_pause = true
#         max_capacity = 2
#         min_capacity = 2
#         seconds_until_auto_pause = 300
#         timeout_action = "ForceApplyCapacityChange"
#     }
# }


############## USED FOR RDS
resource "aws_rds_cluster" "mysql" {
    allocated_storage = 20
    engine = "mysql"
    engine_version = "8.0.25"
    instance_class = "db.t3.micro"
    username = var.db_master_username
    password = var.db_master_password
}   