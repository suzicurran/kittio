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
    maxed_hunger = hunger.decay
    hunger.save
    maxed_unhappiness = happiness.decay
    happiness.save
    return (maxed_unhappiness || maxed_hunger)
  end

end
