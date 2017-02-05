class Pet < ApplicationRecord
  validates_presence_of :user_id, :name, :color
  belongs_to :user
  has_one :hunger
  has_one :happiness

  COLORS = ["D34F34", "FFFFFF", "4C5ABC"]

  def colorize
    self.color = COLORS.sample
  end

  def add_attributes
    self.hunger = Hunger.new
    self.happiness = Happiness.new
  end

end
