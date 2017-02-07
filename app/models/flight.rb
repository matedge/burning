# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  date        :text
#  origin      :text
#  destination :text
#  plane_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flight < ActiveRecord::Base
  belongs_to :plane
  has_many :users, :through => :reservations
  has_many :reservations
end
