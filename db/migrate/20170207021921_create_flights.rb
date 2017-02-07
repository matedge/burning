class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :date
      t.text :origin
      t.text :destination
      t.integer :plane_id
      t.timestamps null: false
    end
  end
end
