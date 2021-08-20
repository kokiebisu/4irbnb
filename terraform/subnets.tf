resource "aws_subnet" "public" {
  availability_zone = "us-east-1a"
  cidr_block        = "10.0.1.0/24"
  vpc_id            = aws_vpc.vpc.id

  tags = {
    Name = "${var.app_name}-public-subnet"
  }
}

resource "aws_subnet" "private" {
  availability_zone = "us-east-1b"
  cidr_block        = "10.0.2.0/24"
  vpc_id            = aws_vpc.vpc.id

  tags = {
    Name = "${var.app_name}-private-subnet"
  }
}

resource "aws_db_subnet_group" "rds" {
  name       = "rds_subnet_group"
  subnet_ids = [aws_subnet.public.id]

  tags = {
    Name = "Education"
  }
}