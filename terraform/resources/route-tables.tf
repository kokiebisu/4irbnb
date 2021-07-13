resource "aws_internet_gateway" "nextbnb-internet-gateway" {
    vpc_id = aws_vpc.nextbnb-vpc.id
    tags = var.internet_gateway_tags
}

resource "aws_default_route_table" "nextbnb-public-route-table" {
    default_route_table_id = aws_vpc.nextbnb-vpc.default_route_table_id
    tags = var.public_route_table_tags

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = var.internet_gateway.id
    }
}

resource "aws_route_table" "nextbnb-private-route-table" {
    vpc_id = aws_vpc.nextbnb-vpc.id
    tags = var.private_route_table_tags
}

resource "aws_route_table_association" "nextbnb-public-route-table" {
    route_table_id = aws_default_route_table.nextbnb-public-route-table.id
    subnet_id = aws_subnet.public-subnet.id
}

resource "aws_route_table_association" "nextbnb-private-route-table" {
    route_table_id = aws_route_table.nextbnb-private-route-table.id
    subnet_id = aws_subnet.private-subnet.id
}

