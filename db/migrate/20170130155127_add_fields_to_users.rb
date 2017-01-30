class AddFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :admin, :boolean, default: false
    add_column :users, :username, :string, null: false
    add_column :users, :avatar, :string
  end
end
