resource "aws_acm_certificate" "this" {
  domain_name               = var.site_domain
  subject_alternative_names = ["*.${var.site_domain}"]
  validation_method         = "DNS"
}

resource "aws_acm_certificate_validation" "this" {
  certificate_arn         = aws_acm_certificate.this.arn
  validation_record_fqdns = [for record in aws_route53_record.default : record.fqdn]
}
