data "aws_ecr_repository" "stay_api" {
  name                 = "4irbnb-stay-api"
}

data "aws_ecr_repository" "stay_consumer" {
  name                 = "4irbnb-stay-consumer"
}

data "aws_ecr_image" "stay_api" {
  repository_name = data.aws_ecr_repository.stay_api.name
  image_tag = "latest"
}

data "aws_ecr_image" "stay_consumer" {
  repository_name = data.aws_ecr_repository.stay_consumer.name
  image_tag = "latest"
}
