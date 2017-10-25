Rails.application.routes.draw do
  root "homes#research_portal"
  resources :homes

  namespace :api do
    resources :energy_sources, only: :index
    resources :ritual_codes, only: :create
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
