### Provider
variable "region" {
    type = string
    description = "Region to locate the VPC network"
}

### VPC
variable "vpc_tags"  {
    type = object({
        Name = string
    })
}

### Profile
variable "profile" {
    type = string
    description = "Profile to use"
}

### Internet Gateway
variable "internet_gateway_tags" {
    type = object({
        Name = string
    })
    description = "Internet gateway to use"
}

### VPC
variable "vpc_id" {
    type = string
    description = "VPC ID"
}

### Route table
variable "public_route_table_tags" {
    type = object({
        Name = string
    })
}

variable "private_route_table_tags" {
    type = object({
        Name = string
    })
}

### Subnet
variable "public_subnet_tags" {
    type = object({
        Name = string
    })
}

variable "private_subnet_tags" {
    type = object({
        Name = string
    })
}