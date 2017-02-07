Rails.application.routes.draw do
  root :to => 'pages#app'
  resources :reservations
  resources :users
  resources :flights
  resources :planes

end
