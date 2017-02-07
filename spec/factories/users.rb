FactoryGirl.define do
  factory :user do
    sequence(:email, 100) { |n| "cooluser#{n}@bt.com" }
    sequence(:username, 100) { |n| "cooluser#{n}" }
    zip_code "02446"
    password "querty"
  end
end
