output "vpc" {
    value = aws_vpc.nextbnb-vpc
}

### Route Table
output "public_route_table" {
  value = aws_default_route_table.nextbnb-public-route-table
}

output "private_route_table" {
    value = aws_route_table.nextbnb-private-route-table
}

# ### Internet Gateway
# output "internet_gateway" {
#     value = aws_internet_gateway.nextbnb-internet-gateway
# }

### Subnet
output "public_subnet" {
    value = aws_subnet.public-subnet
}

output "private_subnet" {
    value = aws_subnet.private-subnet
}