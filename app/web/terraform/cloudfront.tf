resource "aws_cloudfront_distribution" "plain" {
    origin {
        domain_name = aws_s3_bucket.plain.website_endpoint
        origin_id = aws_s3_bucket.plain.id
    }
    enabled = true

    aliases = [var.site_domain, "www.${var.site_domain}"]
   

    default_cache_behavior {
        allowed_methods = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
        cached_methods = ["HEAD", "GET", "OPTIONS"]
        viewer_protocol_policy = "redirect-to-https"
        target_origin_id = "4irbnb.com"

        forwarded_values {
            query_string = false

            cookies {
                forward = "none"
            }
        }
    }

    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }

    viewer_certificate {
        cloudfront_default_certificate = true
    }
}


# resource "aws_cloudfront_distribution" "www" {
#     origin {
#         domain_name = aws_s3_bucket.plain.bucket_domain_name
#         origin_id = "www.nextbnb.dev"
#     }

#     aliases = [aws_s3_bucket.www.bucket]

#     enabled = true
#     default_cache_behavior {
#     allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
#     cached_methods   = ["GET", "HEAD"]
#     target_origin_id = "www.nextbnb.dev"

#     forwarded_values {
#       query_string = false

#       cookies {
#         forward = "none"
#       }
#     }

#     viewer_protocol_policy = "allow-all"
#     min_ttl                = 0
#     default_ttl            = 3600
#     max_ttl                = 86400
#     }

#     restrictions {
#         geo_restriction {
#             restriction_type = "none"
#         }
#     }

#     viewer_certificate {
#         cloudfront_default_certificate = true
#     }
# }
