# variable "dead_letter_queue" {
#   type = object({
#     arn = string
#   })
# }

variable "read_capacity" {
  type = number
  default = 10
}
variable "write_capacity" {
  type = number
  default = 10
}