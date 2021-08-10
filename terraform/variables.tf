variable "app_name" {
  type    = string
  default = "4irbnb"
}
variable "region" {
  type        = string
  default     = "us-east-1"
  description = "Region to locate the VPC network"
}

variable "aws_access_key" {
  type      = string
  sensitive = true
}

variable "aws_secret_key" {
  type      = string
  sensitive = true
}

variable "site_domain" {
  type    = string
  default = "4irbnb.com"
}

variable "db_master_username" {
  type = string
  sensitive = true
}

variable "db_master_password" {
  type = string
  sensitive = true
}