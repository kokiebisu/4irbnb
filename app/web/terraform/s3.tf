resource "aws_s3_bucket" "plain" {
  bucket = "4irbnb.com"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"

    
  }
}

resource "aws_s3_bucket" "www" {
    bucket = "www.4irbnb.com"
    acl = "public-read"

    website {
        redirect_all_requests_to = aws_s3_bucket.plain.website_endpoint
    }
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.plain.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "PublicReadGetObject"
        Effect = "Allow"
        Principal = "*"
        Action = "s3:GetObject"
        Resource = [
          aws_s3_bucket.plain.arn,
          "${aws_s3_bucket.plain.arn}/*"
        ]
      }
    ]
  })
}