Rails.application.routes.draw do
  # root "articles#index"
  resources :users
  get :common_chat, to: 'users#common_chat'
end
