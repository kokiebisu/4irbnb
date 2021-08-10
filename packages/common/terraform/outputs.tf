output "rds_hostname" {
    value = aws_db_instance.test.address
}

output "rds_port" {
    value = aws_db_instance.test.port
}

output "rds_username" {
    value = aws_db_instance.test.username
}