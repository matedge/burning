# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :text
#  admin      :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :text
#

class User < ActiveRecord::Base
  has_many :reservations
  has_many :flights, :through => :reservations
  has_secure_password
  validates :email, :presence => true, :uniqueness => true, :length => {:minimum => 5}

end
