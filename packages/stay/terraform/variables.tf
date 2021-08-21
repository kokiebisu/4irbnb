variable "read_capacity" {
  type    = number
  default = 10
}

variable "write_capacity" {
  type    = number
  default = 10
}

variable "api_gateway_id" {
  type = string
}

variable "api_gateway_execution_arn" {
  type = string
}

variable "service_role_arn" {
  type = string
}

variable "aws_private_subnet_a_id" {
  type = string
}

variable "aws_rds_security_group_id" {
  type = string
}