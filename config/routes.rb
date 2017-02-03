Rails.application.routes.draw do
  root "application#home"
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :pets do
      end
    end
  end

end
