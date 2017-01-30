require 'rails_helper'

RSpec.describe User, type: :model do
  describe "devise user model" do
    it "defaults admin to false" do
      setup_user = FactoryGirl.create(:user)
      expect(setup_user.admin).to be(false)
    end
  end
end
