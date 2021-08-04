resource "aws_internet_gateway" "default" {
  vpc_id = aws_vpc.vpc.id

  tags = {
    Name = "${var.app_name}-internet-gateway"
  }
}

