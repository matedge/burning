class AddSeatToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :seat, :integer
  end
end
