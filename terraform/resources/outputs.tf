output "vpc" {
    value = aws_vpc.nextbnb_vpc
}

### Route Table
output "public_route_table" {
  value = aws_default_route_table.nextbnb_public_route_table
}

output "private_route_table" {
    value = aws_route_table.nextbnb_private_route_table
}

# ### Internet Gateway
# output "internet_gateway" {
#     value = aws_internet_gateway.nextbnb-internet-gateway
# }

### Subnet
output "public_subnet" {
    value = aws_subnet.public_subnet
}

output "private_subnet" {
    value = aws_subnet.private_subnet
}