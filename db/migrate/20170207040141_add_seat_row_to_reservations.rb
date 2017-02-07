class AddSeatRowToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :seat_row, :integer
  end
end
