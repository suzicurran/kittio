class AddHungerAndHappiness < ActiveRecord::Migration[5.0]
  def change
    create_table :hungers do |t|
      t.float :value, null: false, default: 5.0
      t.belongs_to :pet, null: false

      t.timestamps
    end

    create_table :happinesses do |t|
      t.float :value, null: false, default: 3.0
      t.belongs_to :pet, null: false

      t.timestamps
    end
  end
end
