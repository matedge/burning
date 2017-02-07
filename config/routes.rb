Rails.application.routes.draw do
  root :to => 'pages#app'
  resources :reservations
  resources :users
  resources :flights
  resources :planes

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
