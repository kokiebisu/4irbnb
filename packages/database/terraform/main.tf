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
resource "aws_db_instance" "mysql" {
  name                      = "airbnb"
  allocated_storage         = 20
  engine                    = "mysql"
  engine_version            = "8.0.25"
  instance_class            = "db.t3.micro"
  username                  = var.db_master_username
  password                  = var.db_master_password
  skip_final_snapshot       = false
  backup_retention_period   = 0
  apply_immediately         = "true"
  final_snapshot_identifier = "airbnb-snapshot"
  identifier                = "airbnb"
  publicly_accessible       = true
  vpc_security_group_ids    = []
}

resource "aws_security_group" "rds" {
  name        = "rds"
  description = "Allows RDS to be accessed from anywhere"
  vpc_id      = var.vpc_id

  ingress = [
    {
      description = "Allows mysql protocols to enter to the VPC"
      from_port   = 3306
      to_port     = 3306
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
    }
  ]

  egress = [
    {
      from_port        = 0
      to_port          = 0
      protocol         = "-1"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = ["::/0"]
    }
  ]
}