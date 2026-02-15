module "vnet" {
  source = "./modules/vnet"
  resource_group_name = var.resource_group_name
  location = var.location
}

module "acr" {
  source = "./modules/acr"
  resource_group_name = var.resource_group_name
  location = var.location
}

module "aks" {
  source = "./modules/aks"
  resource_group_name = var.resource_group_name
  location = var.location
  subnet_id = module.vnet.aks_subnet_id
 
}

