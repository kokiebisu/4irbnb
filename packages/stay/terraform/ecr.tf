resource "aws_ecr_repository" "stay_api" {
  name                 = "nextbnb-stay-api"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_repository" "stay_consumer" {
  name                 = "nextbnb-stay-consumer"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

data "aws_ecr_image" "stay_api" {
  count = 0
  repository_name = aws_ecr_repository.stay_api.name
  image_tag = "latest"
}

data "aws_ecr_image" "stay_consumer" {
  count = 0
  repository_name = aws_ecr_repository.stay_consumer.name
  image_tag = "latest"
}