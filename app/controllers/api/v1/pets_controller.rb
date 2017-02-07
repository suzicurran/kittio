class Api::V1::PetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    new_pet = Pet.new
    new_pet.name = params[:newPet][:name]
    new_pet.user = current_user
    new_pet.colorize
    new_pet.add_attributes
    new_pet.save
    render status: 200, json: {
      message: "pet saved",
    }.to_json
  end

  def show
    current_pet = Pet.find_by(user_id: params[:id])
    hash = current_pet.as_json
    user = User.find_by(id: params[:id])
    hash[:user_name] = user.username
    hash[:hunger] = current_pet.hunger.value
    hash[:happiness] = current_pet.happiness.value
    hash[:age] = (Time.now.to_i - current_pet.created_at.to_i)/86400
    render json: hash
  end

  def update
    current_pet = Pet.find_by(user_id: params[:id])
    message = "no action taken"

    if params[:interaction][:hug]
      new_happiness = current_pet.happiness.value + 1
      if new_happiness > 5
        new_happiness = 5.0
      end
      current_pet.happiness.value = new_happiness
      current_pet.happiness.save
      message = "pet hugged"
    end

    if params[:interaction][:feed]
      new_hunger = current_pet.hunger.value + 1
      if new_hunger > 5
        new_hunger = 5.0
      end
      current_pet.hunger.value = new_hunger
      current_pet.hunger.save
      message = "pet fed"
    end

    render status: 200, json: {
      message: message,
    }.to_json
  end

end
