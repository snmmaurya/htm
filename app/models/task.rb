class Task < ActiveRecord::Base
	belongs_to :project
	belongs_to :user
	has_one :assignment
	has_one :user, through: :assignment
	has_many :attachments
	has_many :comments
end