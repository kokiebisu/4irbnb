variable "db_cluster_identifier" {
  type = string
}

variable "db_name" {
    type = string
}

variable "db_rds_username" {
  type = string
}

variable "db_rds_password" {
  type = string
}

variable "rds_security_group_arn" {
  type = string
}

variable "vpc_rds_security_group_id" {
  type = string
}

variable "vpc_rds_subnet_group" {
  type = string
}