FactoryGirl.define do
  factory :user do
    sequence(:email, 100) { |n| "cooluser#{n}@bt.com" }
    sequence(:username, 100) { |n| "cooluser#{n}" }
    twitter_handle "testuser"
    password "querty"
  end
end
