class User < ActiveRecord::Base
	belongs_to :role
	has_many :projects
	has_many :assignments
	has_many :tasks, through: :assignments
	has_many :attachments
	has_many :comments
end