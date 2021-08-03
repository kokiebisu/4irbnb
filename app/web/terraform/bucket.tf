resource "aws_s3_bucket" "plain" {
  bucket = "nextbnb.dev"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"

    
  }
}

resource "aws_s3_bucket" "www" {
    bucket = "www.nextbnb.dev"
    acl = "public-read"

    website {
        redirect_all_requests_to = aws_s3_bucket.plain.website_endpoint
    }
}