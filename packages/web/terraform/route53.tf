resource "aws_route53_record" "plain" {
  zone_id = var.route53_zone_id
  name = "4irbnb.com"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.plain.domain_name
    zone_id = aws_cloudfront_distribution.plain.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "www" {
  zone_id = var.route53_zone_id
  name = "www.4irbnb.com"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.plain.domain_name
    zone_id = aws_cloudfront_distribution.plain.hosted_zone_id
    evaluate_target_health = true
  }
}