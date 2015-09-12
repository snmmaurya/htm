class Role < ActiveRecord::Base
	has_many :users
end

#ADMIN | SUPER | USER
