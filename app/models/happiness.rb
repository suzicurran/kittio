class Happiness < ApplicationRecord
  validates_presence_of :pet_id, :value
  belongs_to :pet

  def decay
    if self.value > 0
      self.value = (self.value - 1.0)
    end
  end
end
