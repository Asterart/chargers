class CreateChargers < ActiveRecord::Migration[5.0]
  def change
    create_table :chargers do |t|
      t.string :name
      t.float :lat
      t.float :long
      t.integer :num_of_chargers

      t.timestamps
    end
  end
end
