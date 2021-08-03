resource "aws_default_route_table" "nextbnb_public_route_table" {
  default_route_table_id = aws_vpc.nextbnb_vpc.default_route_table_id
  tags = {
    Name = "${var.app_name}-public-route-table"
  }
}

resource "aws_route_table" "nextbnb_private_route_table" {
  vpc_id = aws_vpc.nextbnb_vpc.id
  tags = {
    Name = "${var.app_name}-private-route-table"
  }
}

resource "aws_route_table_association" "nextbnb_public_route_table" {
  route_table_id = aws_default_route_table.nextbnb_public_route_table.id
  subnet_id      = aws_subnet.public.id
}

resource "aws_route_table_association" "nextbnb_private_route_table" {
  route_table_id = aws_route_table.nextbnb_private_route_table.id
  subnet_id      = aws_subnet.private.id
}

