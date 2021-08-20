resource "aws_subnet" "public_a" {
  availability_zone = "us-east-1a"
  cidr_block        = "10.0.1.0/24"
  vpc_id            = aws_vpc.vpc.id

  tags = {
    Name = "${var.app_name}-public-a-subnet"
  }
}

resource "aws_subnet" "public_b" {
  availability_zone = "us-east-1b"
  cidr_block        = "10.0.1.0/24"
  vpc_id            = aws_vpc.vpc.id

  tags = {
    Name = "${var.app_name}-public-b-subnet"
  }
}

resource "aws_subnet" "private_a" {
  availability_zone = "us-east-1a"
  cidr_block        = "10.0.2.0/24"
  vpc_id            = aws_vpc.vpc.id

  tags = {
    Name = "${var.app_name}-private-a-subnet"
  }
}

resource "aws_db_subnet_group" "rds" {
  name       = "rds_subnet_group"
  subnet_ids = [aws_subnet.public_a.id, aws_subnet.public_b.id]

  tags = {
    Name = "4irbnb Relational DB"
  }
}