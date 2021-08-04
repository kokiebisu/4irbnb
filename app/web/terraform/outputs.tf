output "website_domain" {
    value = aws_s3_bucket.plain.website_endpoint
}