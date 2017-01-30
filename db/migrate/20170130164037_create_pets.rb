class CreatePets < ActiveRecord::Migration[5.0]
  def change
    create_table :pets do |t|
      t.string :name, null: false
      t.string :color, null: false, default: "FFFFFF"
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
