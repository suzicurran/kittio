require 'rails_helper'

RSpec.describe Pet, type: :model do
  describe "pet model" do
    it "defaults color to white" do
      setup_pet = FactoryGirl.create(:pet)
      expect(setup_pet.color).to eq("FFFFFF")
    end
  end
end
