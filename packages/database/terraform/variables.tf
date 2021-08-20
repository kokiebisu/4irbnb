variable "db_cluster_identifier" {
  type = string
}

variable "db_name" {
    type = string
}

variable "db_master_username" {
  type = string
}

variable "db_master_password" {
  type = string
}

variable "rds_security_group_arn" {
  type = string
}

variable "vpc_rds_security_group_id" {
  type = string
}