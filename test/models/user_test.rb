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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
