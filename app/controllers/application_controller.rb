class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  def home
    @user_pet = false
    @user_id = false
    if user_signed_in?
      @user_pet = Pet.find_by(user_id: current_user.id)
      @user_id = current_user.id
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :avatar, :avatar_cache])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :avatar, :avatar_cache])
  end
end
