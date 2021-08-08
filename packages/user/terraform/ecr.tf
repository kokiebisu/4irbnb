data "aws_ecr_repository" "user_api" {
  name = "4irbnb-user-api"
}

data "aws_ecr_repository" "user_consumer" {
  name = "4irbnb-user-consumer"
}

data "aws_ecr_image" "user_api" {
  repository_name = data.aws_ecr_repository.user_api.name
  image_tag = "latest"
}

data "aws_ecr_image" "user_consumer" {
  repository_name = data.aws_ecr_repository.user_consumer.name
  image_tag = "latest"
}