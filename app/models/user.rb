class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  validates :zip_code, presence: true, numericality: true, length: { is: 5 }

  def pet
    Pet.find_by(user_id: id)
  end
end
