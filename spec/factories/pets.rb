FactoryGirl.define do
  factory :pet do
    sequence(:email, 100) { |n| "cooluser#{n}@bt.com" }
    sequence(:username, 100) { |n| "cooluser#{n}" }
    password "querty"
  end
end
