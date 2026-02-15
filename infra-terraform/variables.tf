variable "location" {
  description = "Azure region"
  type = string
  default = "East US"
}

variable "resource_group_name" {
  description = "Resource group name"
  type = string
  default = "rg-ecommerce-prod"
}

variable "environment" {
  description = "Environment name"
  type = string
  default = "prod"
}