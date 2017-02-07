class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :reservations, :seat, :seat_col
  end
end
