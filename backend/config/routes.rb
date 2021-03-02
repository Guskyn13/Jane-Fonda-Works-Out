Rails.application.routes.draw do
  resources :favorites
  resources :exercises
  resources :users
  resources :gifs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
