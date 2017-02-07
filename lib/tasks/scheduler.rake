desc "Decay hunger and happiness over time"
task :decay_attributes => :environment do
  puts "Making pets sad and hungry..."
  Pet.find_each do |pet|
    pet.decay_attributes
  end
  puts "All pets now a little worse off."
end
