FactoryGirl.define do
  factory :pet do
    sequence(:name, 100) { |n| "pet#{n}" }
    user
  end
end
