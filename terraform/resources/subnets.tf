resource "aws_subnet" "public-subnet" {
    availability_zone = "us-east-1a"
    cidr_block = "10.0.1.0/24"
    vpc_id = aws_vpc.nextbnb-vpc.id

    tags = var.public_subnet_tags
}

resource "aws_subnet" "private-subnet" {
    availability_zone = "us-east-1b"
    cidr_block = "10.0.2.0/24"
    vpc_id = aws_vpc.nextbnb-vpc.id

    tags = var.private_subnet_tags
}
