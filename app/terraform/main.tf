resource "aws_cognito_user_pool" "pool" {
    name = "nextbnb-pool"
    auto_verified_attributes = [ "email" ]
}