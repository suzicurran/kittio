require 'rails_helper'

RSpec.describe Happiness, type: :model do
  describe "happiness model" do
    it "defaults value to 3 (neutral)" do
      setup_happiness = FactoryGirl.create(:happiness)
      expect(setup_happiness.value).to eq(3.0)
    end
  end
end
