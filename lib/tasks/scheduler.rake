desc "Decay hunger and happiness over time"
task decay_attributes: :environment do

  puts "Making pets sad and hungry..."

  Pet.find_each do |pet|
    if pet.decay_attributes
      if pet.user.username
        TwitterHelper.send_notification(pet.user.username, pet.name)
        puts "Nudged @#{pet.user.username}."
      end
    end
  end

  puts "All pets now a little worse off."
end
