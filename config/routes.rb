Rails.application.routes.draw do
  resources :reservations
  resources :users
  resources :flights
  resources :planes


  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
