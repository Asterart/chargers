Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#home'

  get '/buy', to: 'static_pages#buy'
  get '/sell', to: 'static_pages#sell'
  get '/investor', to: 'static_pages#investor'
  get '/about_us', to: 'static_pages#about_us'
  get '/faq', to: 'static_pages#faq'
  get '/contact', to: 'static_pages#contact'
  

#  scope "/locale" do
#  	resource: 

end
