require 'rails_helper'

RSpec.describe Hunger, type: :model do
  describe "hunger model" do
    it "defaults value to 5 (full)" do
      setup_hunger = FactoryGirl.create(:hunger)
      expect(setup_hunger.value).to eq(5.0)
    end
  end
end
