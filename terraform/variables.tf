### Provider
variable "region" {
    type = string
    default = "us-east-1"
    description = "Region to locate the VPC network"
}

variable "profile" {
    type = string
    default = "profile"
    description = "Profile to use"
}