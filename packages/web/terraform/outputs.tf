output "website_domain" {
    value = aws_s3_bucket.plain.bucket_regional_domain_name
}