# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :text
#  admin      :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base
  # has_many :reservations
  # has_secure_password


end
