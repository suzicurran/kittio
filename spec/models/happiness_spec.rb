require 'rails_helper'

RSpec.describe Happiness, type: :model do
  describe "model" do
    it "defaults value to 1" do
      setup_happiness = FactoryGirl.create(:happiness)
      expect(setup_happiness.value).to eq(1.0)
    end
  end
end
