ShopifyApp.configure do |config|
  config.application_name = "My Shopify App"
  config.api_key = "a702002fa6ec132f06b951fd231108d3"
  config.secret = "52eba8d74f2e634f4514821c5188f31d"
  config.scope = "read_orders, read_products"
  config.embedded_app = true
end
