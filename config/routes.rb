Rails.application.routes.draw do
  root :to => 'home#index'
  mount ShopifyApp::Engine, at: '/'

  defaults format: :json do
    # get 'shopify/keys', to: 'shopify#keys'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
