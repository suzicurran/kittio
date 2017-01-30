class Pet < ApplicationRecord
  validates_presence_of :user_id, :name, :color
  belongs_to :user
end
