require 'rails_helper'

RSpec.describe Pet, type: :model do
  describe "model" do
    it "should have a name" do
      setup_pet = FactoryGirl.create(:pet)
      expect(setup_pet.name).to be_a(String)
    end
  end
end
