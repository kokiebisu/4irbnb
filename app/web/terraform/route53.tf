data "aws_route53_zone" "this" {
  name = "4irbnb.com"
  private_zone = false
}

resource "aws_route53_record" "default" {
  for_each = {
    for option in aws_acm_certificate.this.domain_validation_options : option.domain_name => {
      name   = option.resource_record_name
      record = option.resource_record_value
      type   = option.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.this.zone_id
}

resource "aws_route53_record" "plain" {
  zone_id = data.aws_route53_zone.this.zone_id
  name = "4irbnb.com"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.plain.domain_name
    zone_id = aws_cloudfront_distribution.plain.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.this.zone_id
  name = "www.4irbnb.com"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.plain.domain_name
    zone_id = aws_cloudfront_distribution.plain.hosted_zone_id
    evaluate_target_health = true
  }
}