class Hunger < ApplicationRecord
  validates_presence_of :pet_id, :value
  belongs_to :pet

  def decay
    if value.positive?
      self.value = self.value - 1.0
    end
  end
end
