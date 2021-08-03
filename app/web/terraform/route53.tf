resource "aws_route53_zone" "this" {
  name = "nextbnb.dev"
}

// should be alias to cloudfront
resource "aws_route53_record" "default" {
  zone_id = aws_route53_zone.this.zone_id
  name    = "nextbnb.dev"
  type    = "A"
  alias {
      name = aws_s3_bucket.plain.website_domain
      zone_id = aws_s3_bucket.plain.hosted_zone_id
      evaluate_target_health = false
  }
  allow_overwrite = true
}

// should be alias to cloudfront
resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.this.zone_id
  name    = "www.nextbnb.dev"
  type    = "A"
  alias {
      name = aws_s3_bucket.www.website_domain
      zone_id = aws_s3_bucket.www.hosted_zone_id
      evaluate_target_health = false
  }
  allow_overwrite = true
}

# resource "aws_route53_record" "api" {
#   zone_id = aws_route53_zone.this.zone_id
#   name    = "api.nextbnb.dev"
#   type    = "A"
#   ttl     = "30"
#   records = ["api.nextbnb.dev"]
# }


resource "aws_acm_certificate" "this" {
  domain_name               = "nextbnb.dev"
  subject_alternative_names = ["www.nextbnb.dev"]
  validation_method         = "DNS"
}

resource "aws_acm_certificate_validation" "example" {
  certificate_arn         = aws_acm_certificate.this.arn
  validation_record_fqdns = [aws_route53_record.default.fqdn, aws_route53_record.www.fqdn]
}



