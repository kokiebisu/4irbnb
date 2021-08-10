variable "db_username" {
  type = string
  default = "testuser"
}

variable "db_password" {
  type = string
  default = "testpassword"
  sensitive = true
}