class Pet < ApplicationRecord
  validates_presence_of :user_id, :name, :color
  belongs_to :user
  has_one :hunger
  has_one :happiness
end
