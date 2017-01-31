class Hunger < ApplicationRecord
  validates_presence_of :pet_id, :value
  belongs_to :pet
end
