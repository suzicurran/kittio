require 'rails_helper'

RSpec.describe Hunger, type: :model do
  describe "model" do
    it "defaults value to 1" do
      setup_hunger = FactoryGirl.create(:hunger)
      expect(setup_hunger.value).to eq(1.0)
    end
  end
end
