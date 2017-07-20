class HomeController < ShopifyApp::AuthenticatedController

  def index
    @shopify_key = ShopifyApp.configuration.api_key
    @shopify_domain = "https://#{@shop_session.url}" if @shop_session
  end

end
