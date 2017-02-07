class Pet < ApplicationRecord
  validates_presence_of :user_id, :name
  belongs_to :user
  has_one :hunger
  has_one :happiness

  def add_attributes
    self.hunger = Hunger.new
    self.happiness = Happiness.new
  end

  def decay_attributes
    hunger.decay
    hunger.save
    happiness.decay
    happiness.save
  end

end
