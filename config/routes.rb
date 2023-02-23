Rails.application.routes.draw do
  root 'lists#index'
  resources :lists, only: %i[index show new create edit update] do
    resources :bookmarks, only: %i[create]
    resources :reviews, only: %i[create]
  end
  resources :bookmarks, only: %i[destroy]
end
