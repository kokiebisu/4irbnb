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